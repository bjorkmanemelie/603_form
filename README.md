# 603: accessible registration form with validation

A registration form built with vanilla JavaScript, ES6 classes and modules. The project focuses on accessibility, validation and clean code structure.

## 📋 Project Overview

This project is part of the **Frontend Development Fullstack JavaScript** course at Chas Academy. The form demonstrates fundamental frontend development with focus on:

- DOM manipulation
- Event handling
- Form validation
- ARIA attributes for accessibility
- ES6 classes and modules
- Clean Code principles

## 🎯 What I've Learned

### HTML & Accessibility
- ✅ Semantic HTML structure
- ✅ ARIA attributes
- ✅ Accessible keyboard navigation

### CSS
- ✅ Responsive layout with `max-width` and centering
- ✅ Focus states for keyboard navigation
- ✅ Hover effects on interactive elements
- ✅ Visual feedback with color indicators (green/red)
- ✅ Box-shadow and border-radius for modern design

### JavaScript - DOM & Events
- ✅ `document.querySelector()` to select elements
- ✅ `addEventListener()` for event handling
- ✅ `preventDefault()` to stop default behavior
- ✅ `classList.add()` / `classList.remove()` for CSS manipulation
- ✅ `setAttribute()` for ARIA attributes
- ✅ `form.reset()` to clear forms

### JavaScript - Validation
- ✅ Check for empty fields
- ✅ `.trim()` to handle whitespace
- ✅ Visual feedback per field
- ✅ Clear error messages
- ✅ Success messages on valid submission

### ES6 - Classes & Modules
- ✅ ES6 classes with `class` syntax
- ✅ `constructor()` for initialization
- ✅ Class methods
- ✅ `this` keyword to reference object properties
- ✅ Arrow functions `() =>` to preserve `this` context
- ✅ `export` and `import` for modules
- ✅ `type="module"` in HTML

### Clean Code
- ✅ Breaking code into smaller, reusable methods
- ✅ Separation of Concerns (one method = one task)
- ✅ Clear method names (`clearValidation`, `markAsInvalid`)
- ✅ DRY principle (Don't Repeat Yourself)
- ✅ Comments to explain code


### Validation
- Checks that all fields are filled
- Shows specific error messages
- Marks empty fields with red border
- Marks correct fields with green border

### Accessibility
- Works with keyboard only (Tab, Enter)
- ARIA attributes for screen readers
- Clear focus states
- Visual and semantic feedback

### User Experience
- Real-time visual feedback
- Color-coded validation (red = error, green = success)
- Clear error and success messages
- Form resets after successful submission


## 🚀 How to Run

1. Open `index.html` in a modern browser
2. Fill in the form fields
3. Press "Send" to test validation

### Manual Testing Checklist
- [x] Empty form submission shows error
- [x] Partially filled form shows errors on empty fields
- [x] Completely filled form shows success
- [x] Form resets after success
- [x] Keyboard navigation works (Tab, Enter)
- [x] Focus states are visible
- [x] Color indicators work correctly

