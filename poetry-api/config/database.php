<?php
// used to get mysql database connection
class Database{
 
private $servername = "localhost";
private $username = "syllabits";
private $password = "1#FkfyD3T~@R";
private $dbname = "syllabit_SiteStorage";

  // get the database connection
  public function getConnection(){

      $this->conn = null;

      try{
          $this->conn = new PDO("mysql:host=" . $this->servername . ";dbname=" . $this->db_name, $this->username, $this->password);
      }catch(PDOException $exception){
          echo "Connection error: " . $exception->getMessage();
      }

      return $this->conn;
  }
}
?>