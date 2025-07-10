document.getElementById('cgpaForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const marks = Array.from(document.querySelectorAll('.marks'))
      .map(input => parseFloat(input.value))
      .filter(n => !isNaN(n) && n >= 0 && n <= 100);
  
    if (marks.length < 6) {
      alert("Please enter all subject marks correctly.");
      return;
    }
  
    const total = marks.reduce((a, b) => a + b, 0);
    const cgpa = (total / (marks.length * 10)).toFixed(2);  // Convert % to CGPA
  
    const name = document.getElementById('name').value;
    const usn = document.getElementById('usn').value;
  
    document.getElementById('result').innerText = `${name} (${usn}) → CGPA: ${cgpa}`;
  });
  