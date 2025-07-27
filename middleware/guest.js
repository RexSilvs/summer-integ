export default function ({ $auth, redirect}) {
    if ($auth.loggedIn) {
        return redirect ('/') // or default home page
    }
}