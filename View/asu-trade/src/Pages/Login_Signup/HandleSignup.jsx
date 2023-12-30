import axios from "axios";

export async function handleSellerSignup(event, location, neighborhood) {
    event.preventDefault();
    
        if (!location || !neighborhood) {
          alert('Sellers must provide a location and neighborhood.');
          return;
        }
        // actual seller-signup
        try {
            const response = await axios.post('/auth/seller-register', {
                location: location,
                neighborhood: neighborhood
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    

export async function handleSignup(event, firstname, lastname, phonenumber, password, confirmPassword, username, email) {
    event.preventDefault();

    /*
    // Check if both names are greater than 3 characters
    if (firstname.length <= 3 || lastname.length <= 3) {
        alert('Both first name and last name must be atleast 3 characters.');
        return;
    }

    // Check if phone number is in the right format
    var phonenumberRegex = /^\+20\d{10}$/;
    if (!phonenumberRegex.test(phonenumber)) {
        alert('Phone number must start with +20 and contain 10 digits');
        return;
    }

    // Password validation function
    // Check if password is at least 8 characters long
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Check if password includes at least one number
    var numberRegex = /\d/;
    if (!numberRegex.test(password)) {
        alert('Password must include at least one number.');
        return;
    }

    // Check if password includes at least one capital letter
    var uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
        alert('Password must include at least one capital letter.');
        return;
    }

    // Check if password includes at least one special character
    var specialCharacterRegex = /[!@#$%^&*]/;
    if (!specialCharacterRegex.test(password)) {
        alert('Password must include at least one special character.');
        return;
    }

    // Password = confirmation password
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }*/

    // Actual user-signup
    try {
        const response = await axios.post('/auth/user-register', {
            username: username,
            password: password,
            email: email,
            firstname: firstname,
            lastname: lastname,
            phoneNumber: phonenumber
        });
        console.log(response);
        var username = document.getElementById("username").value;
    
        // Create user data object
        var user = {
            username: username
        };

        // Save data to cookie
        document.cookie = "userInfo=" + JSON.stringify(user);
    } catch (error) {
        console.log(error);
    }
}
