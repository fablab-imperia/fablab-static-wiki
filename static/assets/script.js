    // We select the element we want to target
    var target = document.getElementById("contacts");

    var scrollToTopBtn = document.getElementById("totopbtn")
    var rootElement = document.documentElement

    // Next we want to create a function that will be called when that element is intersected
    function callback(entries, observer) {
    // The callback will return an array of entries, even if you are only observing a single item
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // Show button
        scrollToTopBtn.classList.add("show")
        // console.log("show")
        
        } else {
        // Hide button
        scrollToTopBtn.classList.remove("show")
        // console.log("unshow")
        }
    });
    }

    function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
        
    // Next we instantiate the observer with the function we created above. This takes an optional configuration
    // object that we will use in the other examples.
    let observer = new IntersectionObserver(callback);
    // Finally start observing the target element
    observer.observe(target);



// privacy consent cookie

const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value}; expires=Fri, 31 Dec 2037 23:59:59 GMT; secure`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'privacy_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);


window.onload = () => {

    console.log(document.cookie);

    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
        blanketDiv.classList.add('hidden');
    }
    const consentPopup = document.getElementById('consent-popup');
    const blanketDiv = document.getElementById('blanket');
    const acceptBtn = document.getElementById('accept');
    acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
            blanketDiv.classList.remove('hidden');
        }, 1000);
    }

};
