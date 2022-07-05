async function getdoginfo(hostname,username) {
const dogres=await fetch(`https://${hostname}/@${username}.json`);
if (dogres.status !== 200) {
    return null;
}
const dogdata=await dogres.json();
return dogdata;
}

export {getdoginfo};