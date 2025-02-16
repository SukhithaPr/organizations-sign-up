export const useGetUserInfo = () => {
    const { name, profilePhoto, userID, isAuth} = JSON.parsel(
        localStorage.getItem("auth")
    );

    return{ name, profilePhoto, userID, isAuth };
}