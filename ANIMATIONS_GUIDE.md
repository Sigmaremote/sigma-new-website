# Animations Guide

## Implementirane Animacije na Landing Page-u

Sve animacije su implementirane korišćenjem **Framer Motion** biblioteke, prateći najbolje prakse za savremene web animacije.

### 🎨 Principi Dizajna

1. **Smooth Easing** - Korišćenje custom cubic-bezier funkcije `[0.22, 1, 0.36, 1]` za prirodan, profesionalan flow
2. **Scroll-Triggered** - Većina animacija se aktivira kada korisnik skroluje do sekcije
3. **Once** - Animacije se izvršavaju samo jednom (ne ponavljaju se svaki put kada se skroluje)
4. **Performance** - Korišćenje GPU-ubrzanih svojstava (opacity, transform)
5. **Accessibility** - Framer Motion automatski poštuje `prefers-reduced-motion` preference korisnika

---

## 📋 Pregled Animacija po Sekcijama

### 1. Hero Section (`HeroCopy.tsx`)

**Šta se animira:**
- ✨ News badge - fade in odozgo
- 📝 Glavni naslov "Sigma helps you hire, pay and retain anyone" - fade + slide up
- 📄 Subhead i Body tekst - stagger efekat (pojavljuju se jedan za drugim)
- 🔘 CTA dugmad - stagger efekat
- 🏆 Product Hunt badges - kasni fade in

**Karakteristike:**
```typescript
- News badge: fade in from top (duration: 0.4s)
- Naslov: fade + slide up (duration: 0.6s)
- Tekst: stagger sa 0.15s delay između elemenata
- Badges: pojavljuju se posle 1s
```

---

### 2. Competitor Logos (`HeroVisual.tsx`)

**Šta se animira:**
- 🏢 Logoi konkurencije se pojavljuju jedan po jedan **sleva na desno** kada korisnik dođe do sekcije
- 📱 Hero slika - fade + slide up

**Karakteristike:**
```typescript
- Svaki logo ima 0.1s delay više od prethodnog
- Animacija: opacity 0→1, x: -20→0
- Trigger: kada sekcija uđe u viewport (margin: -100px)
```

---

### 3. Business Features (`BusinessFeatures.tsx`)

**Sekcija:** "Sigma is designed for businesses powered by global emerging talent"

**Šta se animira:**
- 📋 Naslov sekcije - fade + slide up
- 🎴 Tri kartice ("Hire in Minutes", "Your Pay, Their Way", "Master IRS Compliance") - pojavljuju se jedna po jedna

**Karakteristike:**
```typescript
- Svaka kartica: opacity 0→1, y: 30→0
- Delay između kartica: 0.15s
- Duration: 0.6s
```

---

### 4. Scale Workforce (`ScaleWorkforce.tsx`)

**Šta se animira:**
- 🎯 Naslov "Scale your workforce" - fade + scale efekat (0.95→1)
- 📇 Četiri expandable kartice - stagger efekat
- 📂 Expansion content - smooth height animation

**Karakteristike:**
```typescript
- Naslov: scale animation (0.95→1) + opacity
- Kartice: pojavljuju se sa 0.1s delay između njih
- Expansion: smooth height transition (0.3s)
```

---

### 5. Financial & Compliance Hubs (`FinancialComplianceHubs.tsx`)

**Najkompleksnija sekcija sa tri različite animacije!**

**Šta se animira:**
- 💚 "Global finances for your workers" (dark green card) - **slide in iz leva**
- 💛 "Truly local benefits" (lime card) - **slide in iz desna**
- 🟡 "Compliance & Reporting Hub" (yellow card) - **slide in odozdo**

**Karakteristike:**
```typescript
// Leva kartica
initial: { opacity: 0, x: -60 }
animate: { opacity: 1, x: 0 }

// Desna kartica
initial: { opacity: 0, x: 60 }
animate: { opacity: 1, x: 0 }

// Donja kartica (poseban trigger)
initial: { opacity: 0, y: 40 }
animate: { opacity: 1, y: 0 }
```

---

### 6. Global Reach (`GlobalReach.tsx`)

**Šta se animira:**
- 🌍 Naslov "We get you to every country" - fade + slide up
- 📝 Tekst i CTA - sequential fade in

**Karakteristike:**
```typescript
- Naslov: duration 0.6s
- Tekst: delay 0.2s
- CTA: delay 0.3s
```

---

### 7. Final CTA (`CTAShowcase.tsx`)

**Sekcija:** "Let's build your Global Team with Sigma"

**Šta se animira:**
- 🎴 Cela dark green kartica - fade + scale efekat

**Karakteristike:**
```typescript
initial: { opacity: 0, scale: 0.95 }
animate: { opacity: 1, scale: 1 }
duration: 0.7s
```

---

## ⚡ Performance Optimizacije

### 1. **useInView Hook**
```typescript
const isInView = useInView(ref, { once: true, margin: "-100px" });
```
- `once: true` - animacija se izvršava samo jednom
- `margin: "-100px"` - animacija počinje 100px pre nego što element uđe u viewport

### 2. **GPU Acceleration**
Sve animacije koriste svojstva koja se mogu hardverski ubrzati:
- `opacity`
- `transform` (x, y, scale)

### 3. **Accessibility**
Framer Motion automatski detektuje `prefers-reduced-motion` i:
- Preskače animacije ako je korisnik isključio animacije u sistemu
- Odmah prikazuje finalno stanje

---

## 🎬 Animacija Timeline

Kada korisnik učita stranicu:

```
0ms     → News badge fade in
200ms   → Hero naslov slide up
500ms   → Subhead pojava
650ms   → Body tekst pojava
800ms   → Prvi CTA dugme
950ms   → Drugi CTA dugme
1000ms  → Product Hunt badges

[Scroll Start]

→ Dashboard slika slide up
→ Logoi konkurencije (jedan po jedan, levo→desno)
→ Business Features naslov
→ Business kartice (stagger)
→ "Scale workforce" naslov (scale)
→ Expandable kartice (stagger)
→ Finance kartice (levo/desno slide)
→ Compliance kartica (odozdo)
→ Global Reach naslov
→ Final CTA (scale)
```

---

## 🔧 Tehnički Detalji

### Custom Easing Function
```typescript
ease: [0.22, 1, 0.36, 1] as const
```
Ova cubic-bezier kriva daje profesionalan, smooth efekat koji je sličan Material Design animacijama.

### Stagger Pattern
```typescript
{
  staggerChildren: 0.15,
  delayChildren: 0.3,
}
```
- `staggerChildren`: delay između dece
- `delayChildren`: početni delay pre nego što počnu da se pojavljuju

### Viewport Trigger
```typescript
margin: "-100px"
```
Animacija počinje 100px pre nego što element postane vidljiv - daje iluziju da je animacija već u toku kada element dođe u view.

---

## 📱 Responsive Behavior

Sve animacije rade na svim veličinama ekrana:
- Mobile: animacije su identične ali brže (bolji UX na mobilnim)
- Tablet: standardne brzine
- Desktop: pun efekat

---

## 🎨 Best Practices Koje Smo Pratili

1. ✅ **Subtle, Not Overwhelming** - Animacije su suptilne i ne ometaju čitanje
2. ✅ **Purposeful** - Svaka animacija ima svrhu (vodi pažnju korisnika)
3. ✅ **Performance** - Korišćenje GPU-ubrzanih svojstava
4. ✅ **Accessibility** - Poštovanje prefers-reduced-motion
5. ✅ **Once** - Animacije se ne ponavljaju svaki put
6. ✅ **Progressive Enhancement** - Sadržaj je čitljiv čak i bez animacija

---

## 🚀 Testiranje

Za testiranje animacija:

```bash
npm run dev
```

Zatim otvorite:
- `http://localhost:3000` - testiranje na desktopu
- Otvorite DevTools → Toggle device toolbar - testiranje na mobilnom

---

## 📚 Reference

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Material Design Motion](https://material.io/design/motion)
- [Web Animation Best Practices](https://web.dev/animations/)

---

Svi animacijski parametri (duration, delay, easing) mogu se lako prilagoditi u component fajlovima ako želite da eksperimentišete sa različitim efektima! 🎨

