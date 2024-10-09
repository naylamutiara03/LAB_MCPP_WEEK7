import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#f0f0f0",
        padding: 15,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    card: {
        marginBottom: 15,
        borderRadius: 12,
        elevation: 4,
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    paragraph: {
        marginTop: 8,
        color: "#555",
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    userList: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    userInfo: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default styles;