import iro from '@jaames/iro';

document.addEventListener('DOMContentLoaded', () => {
  const colorPicker = new iro.ColorPicker('#color-picker', {
    width: 250,
    color: "#FF0000",
    borderWidth: 1,
    borderColor: "#fff",
  });

  const wheelHexValue = document.getElementById('wheel-hex-value');
  const wheelColorPreview = document.getElementById('wheel-color-preview');
  const hexInput = document.getElementById('hex-input');
  const applyHexButton = document.getElementById('apply-hex');
  const inputHexValue = document.getElementById('input-hex-value');
  const inputColorPreview = document.getElementById('input-color-preview');

  function updateWheelColor(color) {
    const hexColor = color.hexString;
    wheelHexValue.textContent = hexColor;
    wheelColorPreview.style.backgroundColor = hexColor;
  }

  colorPicker.on('color:change', updateWheelColor);

  // Initial update for wheel color
  updateWheelColor(colorPicker.color);

  function isValidHex(hex) {
    return /^#[0-9A-F]{6}$/i.test(hex);
  }

  function updateInputColor(hexColor) {
    if (isValidHex(hexColor)) {
      inputHexValue.textContent = hexColor;
      inputColorPreview.style.backgroundColor = hexColor;
    } else {
      inputHexValue.textContent = "Invalid hex code";
      inputColorPreview.style.backgroundColor = "#FFFFFF";
    }
  }

  applyHexButton.addEventListener('click', () => {
    const hexColor = hexInput.value.trim();
    updateInputColor(hexColor);
  });

  hexInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const hexColor = hexInput.value.trim();
      updateInputColor(hexColor);
    }
  });
});
