fetch('config/poses.json')
    .then(response => response.json())
    .then(poses => {
        const selectElement = document.getElementById('Poses_dropdown');

        poses.forEach(pose => {
            const option = document.createElement('option');
            option.value = pose.value;
            option.text = pose.text;
            selectElement.add(option);
        });
    });

fetch('config/bukkake-types.json')
    .then(response => response.json())
    .then(types => {
        const selectElement = document.getElementById('Bukkake_dropdown');

        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type.value;
            option.text = type.text;
            selectElement.add(option);
        });

        selectElement.size = types.size;
    });

fetch('config/direction-to-camera.json')
    .then(response => response.json())
    .then(directions => {
        const selectElement = document.getElementById('Direction_dropdown');

        directions.forEach(direction => {
            const option = document.createElement('option');
            option.value = direction.value;
            option.text = direction.text;
            selectElement.add(option);
        });
    });