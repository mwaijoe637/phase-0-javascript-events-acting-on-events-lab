// Your code here
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    } else if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })
  
  function moveDodgerLeft() {
    const dodger = document.getElementById('dodger')
    let left = parseInt(dodger.style.left)
    
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger')
    let left = parseInt(dodger.style.left)
    let dodgerWidth = 40; 
    
    if (left + dodgerWidth < 400) { 
      dodger.style.left = `${left + 1}px`
    }
  }
  