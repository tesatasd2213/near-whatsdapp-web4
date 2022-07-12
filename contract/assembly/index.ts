
@nearBindgen
class Web4Request {
    accountId: string | null;
    path: string;
    params: Map<string, string>;
    query: Map<string, Array<string>>;
    preloads: Map<string, Web4Response>;
}

@nearBindgen
class Web4Response {
    contentType: string;
    status: u32;
    body: Uint8Array;
    bodyUrl: string;
    preloadUrls: string[] = [];
}

function bodyUrl(url: string): Web4Response {
    return { bodyUrl: url };
}

function status(status: u32): Web4Response {
    return { status };
}

export function web4_get(request: Web4Request): Web4Response {
    // Demonstrate serving content from IPFS
    if (request.path == "/") {
        return bodyUrl("ipfs://bafybeiblfwnfkna3klact7t6mrd4wfsxznccof4j6tcnq4foovhxtdgpdq/");
    }

    // By default return 404 Not Found
    return status(404);
}