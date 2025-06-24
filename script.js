// --- START OF FILE script.js ---

document.addEventListener('DOMContentLoaded', () => {

    // --- DATA FOR ALL VIEWERS ---
    const iframe_names_1 = {
        sem: [['colormug-black-sem-1'], ['coords-ethernet-sem-1'], ['flowers-rose-sem-1'], ['tools-measuring-sem-1'], ['fragile-camera-sem-1'], ['cooking-pan-handle-sem-1']],
        geo: [['colormug-black-geo-1'], ['coords-ethernet-geo-1'], ['flowers-rose-geo-1'], ['tools-measuring-geo-1'], ['fragile-camera-geo-1'], ['cooking-pan-handle-geo-1']]
    };
    const optionsSets_1 = [
        ['Colorful Mugs'], ['Cords'], ['Flowers'], ['Tools'], ['Fragile Items'], ['Cooking']
    ];

    const iframe_names_2 = {
        sem: [
            ['colormug-black-sem-2', 'colormug-white-sem-2', 'colormug-blue-sem-2', 'colormug-pink-sem-2', 'colormug-teal-sem-2'],
            ['coords-ethernet-sem-2', 'coords-ethernet-usb-sem-2', 'coords-power-sem-2'],
            ['flowers-rose-sem-2', 'flowers-daisy-sem-2', 'flowers-rose-vase-sem-2', 'flowers-daisy-vase-sem-2'],
            ['tools-measuring-sem-2', 'tools-screwdriver-sem-2', 'tools-wirecutter-sem-2', 'tools-hammer-sem-2', 'tools-solder-sem-2'],
            ['fragile-camera-sem-2', 'fragile-pinksunglasses-sem-2', 'fragile-bluesunglasses-sem-2', 'fragile-lightbulb-sem-2'],
            ['black-pot-handle-sem-2', 'electric-stove-sem-2', 'purple-onion-sem-2', 'golden-bottle-sem-2']
        ],
        geo: [
            ['colormug-black-geo-2', 'colormug-white-geo-2', 'colormug-blue-geo-2', 'colormug-pink-geo-2', 'colormug-teal-geo-2'],
            ['coords-ethernet-geo-2', 'coords-ethernet-usb-geo-2', 'coords-power-geo-2'],
            ['flowers-rose-geo-2', 'flowers-daisy-geo-2', 'flowers-rose-vase-geo-2', 'flowers-daisy-vase-geo-2'],
            ['tools-measuring-geo-2', 'tools-screwdriver-geo-2', 'tools-wirecutter-geo-2', 'tools-hammer-geo-2', 'tools-solder-geo-2'],
            ['fragile-camera-geo-2', 'fragile-pinksunglasses-geo-2', 'fragile-bluesunglasses-geo-2', 'fragile-lightbulb-geo-2'],
            ['black-pot-handle-geo-2', 'electric-stove-geo-2', 'purple-onion-geo-2', 'golden-bottle-geo-2']
        ]
    };
    const optionsSets_2 = [
        ['Black Mug; Handle', 'White Mug; Rim', 'Blue Mug; Handle', 'Pink Teacup; Handle', 'Teal Mug; Rim'],
        ['Ethernet Dongle; Port', 'Ethernet Dongle; USB', 'Power Strip; Base'],
        ['Rose; Plant Stem', 'Daisy; Plant Stem', 'Rose; White Vase', 'Daisy; White Vase'],
        ['Measuring Tape; Base', 'Screwdriver; Handle', 'Plier; Handle', 'Hammer; Handle', 'Soldering Iron; Handle'],
        ['Camera; Base', 'Pink Sunglasses; Earhooks', 'Black Sunglasses; Earhooks', 'Lightbulb; Screw'],
        ['Black Pot; Handle', 'Electric Stove; Knob', 'Purple Onion; Leaf', 'Golden Bottle; Neck']
    ];

    const iframe_names_3 = {
        sem: [
            ['colormug-black-sem-3', 'colormug-white-sem-3', 'colormug-blue-sem-3', 'colormug-pink-sem-3', 'colormug-teal-sem-3'],
            ['coords-ethernet-sem-3', 'coords-ethernet-usb-sem-3', 'coords-power-sem-3'],
            ['flowers-rose-sem-3', 'flowers-daisy-sem-3', 'flowers-rose-vase-sem-3', 'flowers-daisy-vase-sem-3'],
            ['tools-measuring-sem-3', 'tools-screwdriver-sem-3', 'tools-wirecutter-sem-3', 'tools-hammer-sem-3', 'tools-solder-sem-3'],
            ['fragile-camera-sem-3', 'fragile-pinksunglasses-sem-3', 'fragile-bluesunglasses-sem-3', 'fragile-lightbulb-sem-3'],
            ['black-pot-handle-sem-3', 'electric-stove-sem-3', 'purple-onion-sem-3', 'golden-bottle-sem-3']
        ],
        geo: [
            ['colormug-black-geo-3', 'colormug-white-geo-3', 'colormug-blue-geo-3', 'colormug-pink-geo-3', 'colormug-teal-geo-3'],
            ['coords-ethernet-geo-3', 'coords-ethernet-usb-geo-3', 'coords-power-geo-3'],
            ['flowers-rose-geo-3', 'flowers-daisy-geo-3', 'flowers-rose-vase-geo-3', 'flowers-daisy-vase-geo-3'],
            ['tools-measuring-geo-3', 'tools-screwdriver-geo-3', 'tools-wirecutter-geo-3', 'tools-hammer-geo-3', 'tools-solder-geo-3'],
            ['fragile-camera-geo-3', 'fragile-pinksunglasses-geo-3', 'fragile-bluesunglasses-geo-3', 'fragile-lightbulb-geo-3'],
            ['black-pot-handle-geo-3', 'electric-stove-geo-3', 'purple-onion-geo-3', 'golden-bottle-geo-3']
        ]
    };
    const optionsSets_3 = optionsSets_2;

    function initializeViewer(config) {
        const container = document.querySelector(config.containerSelector);
        if (!container) return;

        const allIframeElements = Array.from(container.querySelectorAll('.iframe'));
        const thumbnails = container.querySelectorAll('.thumbnail-btn');
        const toggle = container.querySelector('.opacity-toggle');
        const dropdownBtn = container.querySelector('.dropdown-btn');
        const selectedOptionSpan = container.querySelector('.selected-option');
        // *** THE FIX IS HERE: Changed '.options-menu' to '.dropdown-menu' ***
        const dropdownMenu = container.querySelector('.dropdown-menu');
        const slideLeftBtn = container.querySelector('.slide-arrow-prev');
        const slideRightBtn = container.querySelector('.slide-arrow-next');
        
        let currentSceneIndex = 0;
        let currentOptionIndex = 0;
        let currentType = 'sem';

        function showIframe() {
            const iframeIdToShow = config.iframeNames[currentType]?.[currentSceneIndex]?.[currentOptionIndex];
            
            allIframeElements.forEach(iframe => {
                if (iframe.id === iframeIdToShow) {
                    if (iframe.getAttribute('src') === 'about:blank') {
                        iframe.setAttribute('src', iframe.dataset.src);
                    }
                    iframe.classList.add('show');
                } else {
                    if (iframe.getAttribute('src') !== 'about:blank') {
                        iframe.setAttribute('src', 'about:blank');
                    }
                    iframe.classList.remove('show');
                }
            });

            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle('active-btn', index === currentSceneIndex);
            });
        }

        function updateDropdown() {
            // Guard against viewers that don't have a dropdown (like Results 1)
            if (!dropdownMenu || !selectedOptionSpan) return;

            const options = config.options[currentSceneIndex] || [];
            dropdownMenu.innerHTML = '';

            selectedOptionSpan.textContent = options[currentOptionIndex] || 'N/A';

            options.forEach((optionText, index) => {
                const li = document.createElement('li');
                li.textContent = optionText;
                li.onclick = (e) => {
                    e.stopPropagation();
                    currentOptionIndex = index;
                    selectedOptionSpan.textContent = optionText;
                    dropdownMenu.classList.remove('show');
                    showIframe();
                };
                dropdownMenu.appendChild(li);
            });
        }

        function selectScene(sceneIndex) {
            currentSceneIndex = sceneIndex;
            currentOptionIndex = 0;
            updateDropdown();
            showIframe();
        }

        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => selectScene(index));
        });

        if (toggle) {
            toggle.addEventListener('change', (event) => {
                currentType = event.currentTarget.checked ? 'sem' : 'geo';
                showIframe();
            });
        }

        // Add listener only if the dropdown button and menu exist in this container
        if (dropdownBtn && dropdownMenu) {
            dropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (config.options[currentSceneIndex].length > 1) {
                    dropdownMenu.classList.toggle('show');
                }
            });
        }
        
        if (slideLeftBtn) {
            slideLeftBtn.addEventListener('click', () => {
                const newIndex = (currentSceneIndex - 1 + thumbnails.length) % thumbnails.length;
                selectScene(newIndex);
            });
        }

        if (slideRightBtn) {
            slideRightBtn.addEventListener('click', () => {
                const newIndex = (currentSceneIndex + 1) % thumbnails.length;
                selectScene(newIndex);
            });
        }

        // Initial setup for this viewer
        selectScene(0);
    }

    // --- Global Listeners ---
    window.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            menu.classList.remove('show');
        });
    });

    // --- INITIALIZE ALL VIEWERS ---
    initializeViewer({
        containerSelector: '#results1-container',
        iframeNames: iframe_names_1,
        options: optionsSets_1
    });

    initializeViewer({
        containerSelector: '#results2-container',
        iframeNames: iframe_names_2,
        options: optionsSets_2
    });

    initializeViewer({
        containerSelector: '#results3-container',
        iframeNames: iframe_names_3,
        options: optionsSets_3
    });
});
