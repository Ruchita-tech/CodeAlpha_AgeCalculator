
function calculateAge() {
       const dobInput = document.getElementById("dob").value;
      const ageOutput = document.getElementById("age-result");
  
   
    if (!dobInput) {
      ageOutput.textContent = "Please enter a valid birthdate."; 
      return; 
    }
  
    
    const dob = new Date(dobInput);
        const today = new Date();    
   
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();
    
       if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (ageMonths < 0) {
      ageYears--; 
      ageMonths += 12; 
    }
  
    ageOutput.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
  }

  function clearDOB() {
    const dobInput = document.getElementById("dob");
    const ageOutput = document.getElementById("age-result");
    
    dobInput.value = "";
    ageOutput.textContent = "";
  }
  