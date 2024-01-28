const root = document.querySelector("form");
const bottleneckPercentage = document.querySelector("#bottleneck-percentage");
const progressBar = document.getElementById("progressbar");

root.addEventListener("submit", (e) => {
  e.preventDefault();

  const cpu = parseInt(document.querySelector("#cpu").value);
  const gpu = parseInt(document.querySelector("#gpu").value);
  const motherboard = parseInt(document.querySelector("#motherboard").value);

  if (cpu === 0 || gpu === 0 || motherboard === 0) {
    progressBar.innerHTML = "<p>Please select a CPU, GPU, and motherboard.</p>";
  } else {
    const bottleneck = Math.max(cpu, gpu) / Math.min(cpu, gpu) - 1;
    bottleneckPercentage.innerHTML = `<p>Your system's bottleneck percentage is ${bottleneck.toFixed(2)}%.</p>`;

    // Advice based on bottleneck percentage
    if (bottleneck < 5) {
      bottleneckPercentage.innerHTML += "<p>Congratulations! Your system is well-balanced. Consider regular maintenance and software updates for optimal performance.</p>";
    } else if (bottleneck >= 5 && bottleneck < 10) {
      bottleneckPercentage.innerHTML += "<p>Your system has a moderate bottleneck. Consider upgrading the component with the highest bottleneck and optimizing software settings for better performance.</p>";
    } else {
      bottleneckPercentage.innerHTML += "<p>Your system has a significant bottleneck. To improve performance, upgrade the component causing the bottleneck, optimize software settings, and ensure proper cooling.</p>";
    }
  }
});

document.getElementById('cpu').onchange = function () {
  var url = this.children[this.selectedIndex].getAttribute('href');
  window.open(url, '_blank');
}
document.getElementById('gpu').onchange = function () {
  var url = this.children[this.selectedIndex].getAttribute('href');
  window.open(url, '_blank');
}
