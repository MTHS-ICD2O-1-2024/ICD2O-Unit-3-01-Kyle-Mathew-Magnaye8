// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Mar 2025
// This file contains the JS functions for index.html

// script.js
function calculateArea() {
  const AOfATrapezoid = parseFloat(document.getElementById("a-base-of-a-trapezoid").value)
  const BOfATrapezoid = parseFloat(document.getElementById("b-base-of-a-trapezoid").value)
  const HeightoFATrapezoid = parseFloat(document.getElementById("height-of-a-trapezoid").value)

  if (isNaN(AOfATrapezoid) || isNaN(BOfATrapezoid) || isNaN(HeightoFATrapezoid)) {
    document.getElementById("user-info").innerText =
      "Please enter valid numbers."
    return
  }

  const area = ((AOfATrapezoid + BOfATrapezoid) / 2) * HeightoFATrapezoid
  document.getElementById("user-info").innerText =
    "Area: " + area.toFixed() + "mm²"
}
