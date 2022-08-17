document.addEventListener("alpine:init", () => {
  Alpine.store("cart", {
    data: {},
    showCartDrawer: false,
    init() {
      this.getData()
    },
    async getData() {
      const response = await fetch(window.Shopify.routes.root + "cart.js")
      const cartData = await response.json()

      this.data = cartData
    },
    async add(items) {
      await fetch(window.Shopify.routes.root + "cart/add.js", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ items })
      })

      this.getData()
    },
    async update(updates) {
      await fetch(window.Shopify.routes.root + "cart/update.js", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ updates })
      })

      this.getData()
    },
    async change(changes) {
      await fetch(window.Shopify.routes.root + "cart/change.js", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...changes })
      })

      this.getData()
    },
    async clear() {
      await fetch(window.Shopify.routes.root + "cart/clear.js")

      this.getData()
    }
  })
})