const RELEASES_URL = 'https://api.github.com/repos/cerebroapp/cerebro/releases';

export type Link = [link: string, version: string]

export type Links = {
    AppImage: Link | null,
    deb: Link | null,
    exe: Link | null,
}

const getLinks = async () => {
    const response = await fetch(RELEASES_URL).then(res => res.json());
    let releaseLinks: Links = {
        AppImage: null,
        deb: null,
        exe: null,
    }

    for (let release of response) {
        if (releaseLinks.AppImage && releaseLinks.deb && releaseLinks.exe) break;
        const {assets} = release
        if (assets.length < 0) continue

        assets.forEach((asset: any) => {
            const {browser_download_url} = asset
            const match = (browser_download_url as string).match(/\.(AppImage|deb|exe)$/i)
            if (!match) return
            releaseLinks[match[0].substring(1) as keyof typeof releaseLinks] ??= [browser_download_url, release.tag_name] 
        })
    }

    return releaseLinks;
}

export default getLinks;