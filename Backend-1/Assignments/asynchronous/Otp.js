/*
2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends
*/

// Show “OTP Sent Successfully”
console.log("OTP Sent Successfully")

// Start 10-second countdown
let countdown = 10;
let interval=setInterval(() => {
    console.log(`Resend OTP in ${countdown} seconds.`)
    countdown--
    if(countdown===0){
        console.log("Resend OTP")
        clearInterval(interval)
    }
},1000)