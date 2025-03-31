// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Mar 2025
// This file contains the JS functions for index.html

// script.js
function calculateArea() {
  const a = parseFloat(document.getElementById("base1").value)
  const b = parseFloat(document.getElementById("base2").value)
  const h = parseFloat(document.getElementById("height").value)

  if (isNaN(a) || isNaN(b) || isNaN(h)) {
    document.getElementById("user-info").innerText =
      "Please enter valid numbers."
    return
  }

  const area = ((a + b) / 2) * h
  document.getElementById("user-info").innerText =
    "Area: " + area.toFixed() + "mm²"
}
