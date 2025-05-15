document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../assets/hex_spiral.svg",
        "../assets/impossible_triangle.svg",
        "../assets/hrp_pg_152.svg",
        "../assets/triangles_.svg",
        "../assets/suleyman_1.svg",
        "../assets/frieze_1.svg",
        "../assets/lace_8_3.svg",
        "../assets/lace_8_4.svg",
        "../assets/lace_10_3.svg",
        "../assets/lace_10_4.svg",
        "../assets/lace_12_3.svg",
        "../assets/lace_12_4.svg",
        "../assets/lace_14_3.svg",
        "../assets/lace_14_4.svg",
        "../assets/scale_rotate.svg",
        "../assets/scale_rotate2.svg",
        "../assets/simple_segments2_1.svg",
        "../assets/simple_segments2_1_.svg",
        "../assets/simple_segments2_2_.svg",
        "../assets/simple_segments2_2.svg",
        "../assets/simple_segments3.svg",
        "../assets/even_odd_lace.svg",
        "../assets/376dap_pg14.svg",
        "../assets/376dap_pg55.svg",
        "../assets/376dap_pg61.svg"

    ]; // Replace with your image URLs
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imgElement = document.createElement("img");
    imgElement.src = randomImage;
    imgElement.alt = "";
    imgElement.style.width = "200px";
    console.log(document.URL);
    document.getElementById("random-image-container").appendChild(imgElement);
});

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../../assets/hex_spiral.svg",
        "../../assets/impossible_triangle.svg",
        "../../assets/hrp_pg_152.svg",
        "../../assets/triangles_.svg",
        "../../assets/suleyman_1.svg",
        "../../assets/frieze_1.svg",
        "../../assets/lace_8_3.svg",
        "../../assets/lace_8_4.svg",
        "../../assets/lace_10_3.svg",
        "../../assets/lace_10_4.svg",
        "../../assets/lace_12_3.svg",
        "../../assets/lace_12_4.svg",
        "../../assets/lace_14_3.svg",
        "../../assets/lace_14_4.svg",
        "../../assets/scale_rotate.svg",
        "../../assets/scale_rotate2.svg",
        "../../assets/simple_segments2_1.svg",
        "../../assets/simple_segments2_1_.svg",
        "../../assets/simple_segments2_2_.svg",
        "../../assets/simple_segments2_2.svg",
        "../../assets/simple_segments3.svg",
        "../../assets/even_odd_lace.svg",
        "../../assets/376dap_pg14.svg",
        "../../assets/376dap_pg55.svg",
        "../../assets/376dap_pg61.svg"

    ]; // /docsReplace with your image URLs
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imgElement = document.createElement("img");
    imgElement.src = randomImage;
    imgElement.alt = "";
    imgElement.style.width = "200px";
    console.log(document.URL);
    document.getElementById("random-image-container2").appendChild(imgElement);
});

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../../assets/prisse_cairo_94.svg",
    ]; // /docsReplace with your image URLs
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imgElement = document.createElement("img");
    imgElement.src = randomImage;
    imgElement.alt = "";
    imgElement.style.width = "800px";
    console.log(document.URL);
    document.getElementById("random-image-container3").appendChild(imgElement);
});
