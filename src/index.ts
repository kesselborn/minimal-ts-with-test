import { app } from "./server.js"; // <-- yes: relative imports need `.js` extension ... typescript handles this correctly

const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})