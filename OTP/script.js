function generateOTP() {
    const digits = '0123456789';
    let otp = '';
    
    for(let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    
    document.getElementById('otp').innerHTML = otp;
    
  }

  setInterval(function() {
    const now = new Date();
    console.log(`A hora atual é ${now.toLocaleTimeString()}`);
  }, 60 * 1000);
  