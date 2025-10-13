# Animation Test Checklist ✅

## How to Test Animations

### Step-by-Step Testing Guide

1. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open: `http://localhost:3000`

---

## 🎬 Animation Checklist

### ✅ Hero Section
- [ ] News badge fades in from top when page loads
- [ ] Main title "Sigma helps you hire, pay and retain anyone" slides up smoothly
- [ ] Subheading appears after title with slight delay
- [ ] Body text appears after subheading
- [ ] CTA buttons appear one after another (stagger effect)
- [ ] Product Hunt badges fade in last

**Expected timing:** ~1.5 seconds for full sequence

---

### ✅ Competitor Logos Section
- [ ] Dashboard image slides up when scrolling down
- [ ] Text "Companies use Sigma's end-to-end solution to replace:" fades in
- [ ] Logos appear **one by one from left to right** when section comes into view
  - Deel (first)
  - Payoneer (second)
  - Gusto (third)
  - Safety Wing (fourth)
  - Workday (fifth)
  - Checkr (sixth)

**Expected timing:** 0.6 seconds total stagger

---

### ✅ Business Features Section
**Title:** "Sigma is designed for businesses powered by global emerging talent"

- [ ] Section title fades in + slides up when scrolling to it
- [ ] Three cards appear **one by one** with slight delays:
  - "Hire in Minutes" (first)
  - "Your Pay, Their Way" (second)
  - "Master IRS Compliance" (third)

**Expected timing:** Cards appear over ~0.45 seconds

---

### ✅ Scale Workforce Section
- [ ] Title "Scale your workforce" has scale effect (grows from 95% to 100%)
- [ ] Four expandable cards appear one by one:
  - Hire Contractors
  - Hire Employees
  - Run Payroll
  - Retain your workers
- [ ] Clicking on cards expands them smoothly
- [ ] Expansion content has smooth height animation

---

### ✅ Financial & Compliance Hubs (MOST IMPORTANT!)
This is the most complex animation section:

- [ ] **Left card** "Global finances for your workers" (dark green) **slides in from LEFT**
- [ ] **Right card** "Truly local benefits" (lime) **slides in from RIGHT**
- [ ] Both top cards animate **simultaneously** (not one after another)
- [ ] **Bottom card** "Compliance & Reporting Hub" (yellow) **slides in from BOTTOM** when you scroll to it

**Expected timing:** Top cards = 0.7s, Bottom card triggers separately

---

### ✅ Global Reach Section
**Title:** "We get you to every country"

- [ ] Title fades in + slides up
- [ ] Description text fades in (slight delay)
- [ ] CTA button fades in (slight delay after text)

**Expected timing:** Sequential over ~0.6 seconds

---

### ✅ Final CTA Section
**Title:** "Let's build your Global Team with Sigma"

- [ ] Entire dark green card has **scale + fade effect**
- [ ] Card grows from 95% to 100% while fading in
- [ ] Content inside is already there (no separate animation)

**Expected timing:** 0.7 seconds

---

## 🧪 Additional Tests

### Performance Tests
- [ ] Animations are smooth (60fps)
- [ ] No jank or stuttering
- [ ] Page scrolls smoothly while animations play
- [ ] Animations work on mobile (test with DevTools device emulation)

### Accessibility Tests
1. **Reduced Motion Test:**
   - Open DevTools → Console
   - Run: `matchMedia('(prefers-reduced-motion: reduce)').matches`
   - Enable reduced motion in OS settings
   - Reload page
   - [ ] Animations should be skipped, content appears immediately

### Browser Tests
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## 🎯 Quality Checklist

### Visual Quality
- [ ] Animations feel natural, not robotic
- [ ] Timing is not too fast or too slow
- [ ] Elements don't "jump" or have layout shifts
- [ ] Animations enhance the content, don't distract from it

### User Experience
- [ ] User can still interact with the page while animations play
- [ ] Animations don't block scrolling
- [ ] Animations play only once (don't repeat on re-scroll)
- [ ] Text is readable immediately (opacity doesn't stay at 0 too long)

---

## 🐛 Common Issues to Check

1. **Animations not triggering:**
   - Make sure you scroll slowly enough for intersection observer to catch
   - Check browser console for errors

2. **Animations too fast/slow:**
   - Adjust `duration` values in component files
   - Standard: 0.5-0.7s for most animations

3. **Layout shifts:**
   - All animated elements should maintain their space
   - Check that initial state doesn't cause layout jumps

---

## 📸 Screenshot Moments

Take screenshots at these moments to verify animations:

1. Hero section fully loaded (after 1.5s)
2. Logos halfway through appearing (after ~0.3s of scroll)
3. Business Features cards mid-animation
4. Financial cards sliding in (catch them mid-slide)
5. Final CTA scaling in

---

## 🎬 Video Recording Recommendation

Record your screen while:
1. Loading the page from scratch
2. Slowly scrolling through all sections
3. Going back up and scrolling down again (verify "once" behavior)

This will help verify the complete animation experience!

---

**Note:** All animations use `once: true`, meaning they only play the first time the section comes into view. This is intentional for better UX!

