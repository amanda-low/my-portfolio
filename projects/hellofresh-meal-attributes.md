# HelloFresh US Cart - Meal Attributes (from Codebase)

## Charge/Surcharge Attributes
**Source:** `app/data-schema/my-deliveries-bff/zod-schemas.ts`

| Attribute | Type | Possible Values | Description |
|-----------|------|-----------------|-------------|
| `charge.reason` | enum | `addon`, `dinner_to_lunch`, `premium`, `add_on_modularity` | Reason for the surcharge |
| `charge.label` | string | e.g., "Italian Week", "Premium" | Display label for charge |
| `charge.unitAmount` | number | cents | Price per unit |
| `charge.totalAmount` | number | cents | Total charge amount |
| `charge.baseUnitAmount` | number | cents (optional) | Original price before discount |
| `charge.baseTotalAmount` | number | cents (optional) | Original total before discount |
| `charge.strategy` | enum | `fixed`, `fixed_amount_and_servings`, `flexible_per_person`, `flexible_per_meal_kit`, `flexible_per_quantity`, `flexible_per_person_and_quantity`, `linear_price_with_discount`, `per_meal` | Pricing calculation strategy |
| `charge.servings` | number | optional | Servings for this charge |

---

## Meal UI Attributes
**Source:** `app/spaces/whitelabel/.../components/common/src/SelectRecipesList/RecipeCard/`

| Attribute | Type | Description | Display |
|-----------|------|-------------|---------|
| `isSpicy` | boolean | Derived from tags with `colorHandle === 'CATEGORY_SPICY'` | Red pepper icon |
| `premiumPrice` | number | Calculated surcharge amount | "+$X.XX" badge |
| `isProteinSwap` | boolean | Meal is a protein variation (different from defaultCourseIndex) | "Customized meal" label |
| `modularityTitle` | string | Title of upgrade/customization option | Bordered upgrade banner |
| `hasAddOnPairing` | boolean | Meal has add-on pairings available | Pairing indicator |
| `isSoldOut` | boolean | Meal unavailable | Disabled state + tooltip |
| `canCustomize` | boolean | User can modify meal | Customization button |
| `isCustomized` | boolean | Meal has been customized | "Customized meal" label |

---

## Recipe Label Attributes
**Source:** `app/data-schema/my-deliveries-bff/zod-schemas.ts`

| Attribute | Type | Description |
|-----------|------|-------------|
| `label.text` | string | Label display text |
| `label.handle` | string | Label identifier |
| `label.foregroundColor` | string | Text color (hex) |
| `label.backgroundColor` | string | Background color (hex) |
| `label.displayLabel` | boolean | Whether to show label |

---

## Key Source Files

### Data Schemas
- `app/data-schema/my-deliveries-bff/zod-schemas.ts` - Meal, Charge, Recipe types

### Cart Components
- `app/spaces/whitelabel/.../my-deliveries-components/src/sections/edit-menu/cart/MealListItem.tsx`
- `app/spaces/whitelabel/.../common/src/SelectRecipesList/RecipeCard/RecipeCardBase.tsx`
- `app/spaces/whitelabel/.../common/src/SelectRecipesList/RecipeCard/RecipeCardHeader.tsx`

### Hooks
- `app/spaces/whitelabel/.../my-deliveries-components/src/elements/recipe-card/useMealCardData.ts`
