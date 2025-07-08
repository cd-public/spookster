document.addEventListener('mousemove', (e) => {
    const r = document.getElementById("rpupil");
    const l = document.getElementById("lpupil");
    const x = (2.5 * e.pageX / window.innerWidth).toString() + "vmin";
    const y = (2.5 * e.pageY / window.innerHeight).toString() + "vmin";
    r.style["top"] = y;
    r.style["left"] = x;
    l.style["top"] = y;
    l.style["left"] = x;
});