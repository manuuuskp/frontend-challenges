(function () {
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");
  const milliSeconds = document.querySelector(".milliseconds");
  const startButton = document.querySelector(".start__btn");
  const stopButton = document.querySelector(".stop__btn");
  const resetButton = document.querySelector(".reset__btn");
  let timer;
  let _milliSeconds = 0;
  let _seconds = 0;
  let _minutes = 0;
  let _hours = 0;

  initialise();

  function initialise() {
    stopButton.style.display = "none";
    initialiseEventListener();
  }

  function initialiseEventListener() {
    startButton.addEventListener("click", handleStartButton);
    stopButton.addEventListener("click", handleStopButton);
    resetButton.addEventListener("click", handleResetButton);
  }

  function handleStartButton() {
    displayButtons("none", "block");
    startTimer();
  }

  function handleStopButton() {
    displayButtons("block", "none");
    clearInterval(timer);
  }

  function handleResetButton() {
    displayButtons("block", "none");
    handleResetValues();
    clearInterval(timer);
  }

  function handleResetValues() {
    _milliSeconds = 0;
    _seconds = 0;
    _minutes = 0;
    _hours = 0;
    milliSeconds.innerText = "00";
    seconds.innerText = "00";
    minutes.innerText = "00";
    hours.innerText = "00";
  }

  function displayButtons(displayStart, displayStop) {
    startButton.style.display = displayStart;
    stopButton.style.display = displayStop;
  }

  function startTimer() {
    timer = setInterval(() => {
      _milliSeconds += 10;
      if (_milliSeconds === 100) {
        _milliSeconds = 0;
        _seconds += 1;
        if (_seconds === 60) {
          _seconds = 0;
          _minutes += 1;
          if (_minutes === 60) {
            _minutes = 0;
            _hours += 1;
          }
        }
      }
      milliSeconds.innerText =
        _milliSeconds < 10 ? `0${_milliSeconds}` : _milliSeconds;
      seconds.innerText = _seconds < 10 ? `0${_seconds}` : _seconds;
      minutes.innerText = _minutes < 10 ? `0${_minutes}` : _minutes;
      hours.innerText = _hours < 10 ? `0${_hours}` : _hours;
    }, 100);
  }
})();
