<script>
    const items = ["1", "2"];
    const reigonList = document.getElementById("reigonList");

    items.forEach(item => {
        const option = document.createElement("option")
        option.value = item;
        option.textContent = item;
        reigonList.appendChild(option);
        });
</script>