---
title: Stewart Platform
description: Custom designed Stewart Platform to Simulate 6 degrees of freedom.
tags: ["Solidworks", "PCB Design", "ESP32", "Firmware", "Digital Fabrication", "Solo Project"]
image: ""
link: "#"
priority: 3
---

# Stewart Platform

A **Stewart Platform** is a type of parallel manipulator that has six prismatic actuators, commonly used for flight simulation. I built a scaled-down version to simulate 6 Degrees of Freedom (6-DOF) movement.

## Features
- **6-DOF Control**: Heave, Surge, Sway, Pitch, Roll, and Yaw.
- **Real-time Simulation**: Can receive telemetry data from flight simulators (like Microsoft Flight Simulator) to move in sync with the virtual aircraft.
- **Custom Electronics**: Powered by an ESP32 microcontroller with custom driver boards.

## Challenges
The math behind the inverse kinematics for a parallel manipulator is complex. I had to implement efficient matrix operations on the ESP32 to ensure smooth motion.
