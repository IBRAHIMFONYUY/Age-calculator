const Age=()=>{
    const ageform = document.getElementById('ageForm');
    const result= document.getElementById('result');
    
    ageform.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    if (dob >= today) {
    result.textContent = 'Please enter a valid date of birth';
    return;
    }
    
    const diff = today.getTime() - dob.getTime();
    const ageDate = new Date(diff);
    const ageYears = ageDate.getUTCFullYear() - 1970;
    const ageMonths = ageDate.getUTCMonth();
    const ageDays = ageDate.getUTCDate() - 1;
    
    // ageYears.style.color='hsl(259, 100%, 65%)';
    // ageMonths.style.color='hsl(259, 100%, 65%)';
    // ageDays.style.color='hsl(259, 100%, 65%)';
    
    return(
    result.innerHTML =`Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days`
    )
});
    
    }
    export default Age();