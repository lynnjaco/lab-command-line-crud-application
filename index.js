const inform = console.log;

function run() {
    const action = process.argv[2];
    const product = process.argv[3];
    switch (action) {
        case "index":
            inform(action);
            break;
        case "create":
            inform(action, product);
            break;
        case "show":
            inform(action, product);
            break;
        case "update":
            inform(action, product);
            break;
        case "destroy":
            inform(action, product);
            break;
        case "total":
            inform(action);
            break;
        default:
            inform("Error")
    }
}
run();