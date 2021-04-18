<?php
// 'user' object
class User{
 
    // database connection and table name
    private $conn;
    private $table_name = "syllabit_SiteStorage.Students";
 
    // object properties
    public $idstudents;
    public $email;
    public $lastname;
    public $firstname;
    public $school;
    public $instructoremail;
    public $password;

 
    // constructor
    public function __construct($db){
        $this->conn = $db;
    }
 
    function create(){
 
        // insert query
        $query = "INSERT INTO " . $this->table_name . "
                SET
                    FirstName = :firstname,
                    LastName = :lastname,
                    Email = :email,
                    InstructorEmail = :instructoremail,
                    Password = :password";
     
        // prepare the query
        $stmt = $this->conn->prepare($query);
     
        // sanitize
        $this->firstname=htmlspecialchars(strip_tags($this->firstname));
        $this->lastname=htmlspecialchars(strip_tags($this->lastname));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->instructoremail=htmlspecialchars(strip_tags($this->instructoremail));
        $this->password=htmlspecialchars(strip_tags($this->password));
     
        // bind the values
        $stmt->bindParam(':firstname', $this->firstname);
        $stmt->bindParam(':lastname', $this->lastname);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':instructoremail', $this->instructoremail);

     
        // hash the password before saving to database
        $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
        $stmt->bindParam(':password', $password_hash);
     
        // execute the query, also check if query was successful
        if($stmt->execute()){
            return true;
        }
     
        return false;
    }

        // check if given email exist in the database
    function emailExists(){
    
        // query to check if email exists
        $query = "SELECT id, firstname, lastname, password
                FROM " . $this->table_name . "
                WHERE email = ?
                LIMIT 0,1";
    
        // prepare the query
        $stmt = $this->conn->prepare( $query );
    
        // sanitize
        $this->email=htmlspecialchars(strip_tags($this->email));
    
        // bind given email value
        $stmt->bindParam(1, $this->email);
    
        // execute the query
        $stmt->execute();
    
        // get number of rows
        $num = $stmt->rowCount();
    
        // if email exists, assign values to object properties for easy access and use for php sessions
        if($num>0){
    
            // get record details / values
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
            // assign values to object properties
            $this->id = $row['idStudents'];
            $this->firstname = $row['FirstName'];
            $this->lastname = $row['LastName'];
            $this->password = $row['Password'];
    
            // return true because email exists in the database
            return true;
        }
    
        // return false if email does not exist in the database
        return false;
    }

}

?>