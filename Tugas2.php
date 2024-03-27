<html>

     <head>
        <title>Tugas2.php</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link rel="stylesheet" href="mycss2.css">
     </head>

     <body>
        
     <a href="Tugas21.php" target="_blank"><button type="button" class="btnTambah" >
		<i class="fa-solid fa-plus"></i> Tambah
	 </button>
	
	</a>

     <br></br>

    <table border="1">
	<tr>
	    <th rowspan="2">kode</th>
        <th rowspan="2">nama</th>
	    <th rowspan="2">satuan</th>
	     <th colspan="2">harga</th>	   
	    <th rowspan="2">Action</th>	
	</tr>

	<!-- ini baris 2 -->

	<tr>             
	    
	     <td>beli</td>
	     <td>jual</td>
	
    <!-- ini baris 3 (isian) -->
	<tr>
	     <td>M01</td>
         <td>CPU</td>
	     <td>PCS</td>
	     <td>200</td>
	     <td>350</td>
	     <td>
           <!-- <input type="button" name="edit" value="Edit"> -->
		   <a href="Tugas22.php" target="_blank"><button type="button" class="btnEdit">
		   <i class="fa-solid fa-link"></i> Edit
		   </button>
		</a>           
	     </td>		
	</tr>

    <tr>
	     <td>M02</td>
         <td>Ram</td>
	     <td>PCS</td>
	     <td>300</td>
	     <td>450</td>
	     <td>

         <a href="Tugas22.php" target="_blank"><button type="button" class="btnEdit">
		   <i class="fa-solid fa-link"></i> Edit
		   </button>
	     </td>		
	</tr>

    <tr>
	     <td>M03</td>
         <td>VGA</td>
	     <td>PCS</td>
	     <td>400</td>
	     <td>550</td>
	     <td>
		 <a href="Tugas22.php" target="_blank"><button type="button" class="btnEdit">
		   <i class="fa-solid fa-link"></i> Edit
		   </button>
	     </td>		
	</tr>
    </table>
     </body>
</html>