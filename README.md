# 🔧 Project: Multi-Step Form (Vanilla JS + TailwindCSS)

View the project **live** at: [https://molo-m.github.io/Multi-Step-Form/](https://molo-m.github.io/Multi-Step-Form/)

### 🧠 Project Goal:

Create a **3-step form** that collects user data across multiple screens, with **form validation**, **state persistence**, and a **final confirmation step**.

---

## ✅ Features Breakdown:

### ✏️ Step 1: Personal Information

* Fields:

  * Full Name (required)
  * Email (required, must be valid)
  * Age (optional, must be a number if provided)

### ✏️ Step 2: Account Details

* Fields:

  * Username (required, min 3 chars)
  * Password (required, min 6 chars)
  * Confirm Password (must match password)

### ✏️ Step 3: Review & Submit

* Display all data from previous steps in a read-only format
* Button to “Submit” or “Go Back”

---

## 🖼️ UI & UX Plan

### Navigation:

* "Next" and "Back" buttons to move between steps
* Only allow “Next” if current step passes validation

### Layout:

* Use a **card-like centered layout** (Tailwind: `max-w-md mx-auto bg-white p-6 rounded shadow`)
* Use Tailwind form classes: `form-input`, `text-sm`, `mb-4`, `focus:ring`, etc.
* Each step as a separate container (only one visible at a time)

---

## 🗃️ Data & State Handling

We’ll store all data in a single JS object:

```js
const formData = {
  fullName: '',
  email: '',
  age: '',
  username: '',
  password: ''
};
```

You’ll update this object on each valid field input.

---

## 🧪 Validation Rules (Enforced in JS)

| Field            | Rule                               |
| ---------------- | ---------------------------------- |
| Full Name        | Required, min 2 characters         |
| Email            | Required, must include `@` and `.` |
| Age              | Optional, must be number if filled |
| Username         | Required, min 3 characters         |
| Password         | Required, min 6 characters         |
| Confirm Password | Must match `password`              |

---

## 🛠️ Steps to Build

### ✅ 1. **HTML Setup**

* Create a container div for the form
* Inside: 3 child `<div>`s (one for each step), give each a unique `id`
* Only show Step 1 initially

### ✅ 2. **Tailwind Styling**

* Style the form using Tailwind classes
* Use `transition`, `shadow`, `rounded`, spacing utilities

### ✅ 3. **JS Navigation Logic**

* Add `Next` / `Back` buttons
* Add event listeners to switch steps (`.classList.add("hidden")` / `.remove("hidden")`)
* Store form data into the `formData` object as user progresses

### ✅ 4. **JS Validation**

* On clicking “Next”, validate the current step:

  * If errors, show message and prevent progress
  * If valid, move to the next step

### ✅ 5. **Step 3: Review**

* Display all values from `formData` as plain text
* Add “Edit” (Back) or “Submit” buttons

### ✅ 6. **Submit Logic**

* When “Submit” is clicked:

  * Show a final success message like “🎉 Registration Complete!”
---
## ✅ Deliverables Checklist

* [ ] Step navigation works
* [ ] All validation rules enforced
* [ ] Tailwind used for all layout/styling
* [ ] Data saved in JS object and shown in review step
* [ ] Final confirmation step works
* [ ] Code pushed to GitHub

---
