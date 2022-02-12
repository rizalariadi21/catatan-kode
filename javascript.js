//membuat input menjadi separator thousand
var myinput = document.getElementById('myinput');
		myinput.addEventListener('keyup', function() {
		  var val = this.value;
		  val = val.replace(/[^0-9\.]/g,'');
		  
		  if(val != "") {
			valArr = val.split('.');
			valArr[0] = (parseInt(valArr[0],10)).toLocaleString();
			val = valArr.join('.');
		  }
		  this.value = val;
		});
//

//membuat maxlength bootstrap <input type="number" oninput="javascript: if (this.value.length > 16) this.value = this.value.slice(0, 16);" 

//membuat tooltip diganti tulisanya <input type="text" class="form-control fs-13px" placeholder="Nominal Pengajuan" id="myinput" oninvalid="this.setCustomValidity(' ')" oninput="this.setCustomValidity('')" required />

