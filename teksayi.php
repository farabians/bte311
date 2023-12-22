
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rows = $_POST["rows"];
    $columns = $_POST["columns"];

    echo "<table border='1'>";
    for ($i = 0; $i < $rows; $i++) {
        echo "<tr>";
        for ($j = 0; $j < $columns; $j++) {
            $random_odd_number = rand(1, 50) * 2 - 1; 
            echo "<td>" . $random_odd_number . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}
?>

<form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
    <label for="rows">Satır Sayısı:</label>
    <input type="number" id="rows" name="rows" min="1" required><br><br>
    <label for="columns">Sütun Sayısı:</label>
    <input type="number" id="columns" name="columns" min="1" required><br><br>
    <input type="submit" value="Tablo Oluştur">
</form>
