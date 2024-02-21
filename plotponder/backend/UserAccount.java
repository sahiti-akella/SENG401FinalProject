package plotponder.backend;

public class UserAccount {
    private String firstName;
    private String lastName;
    private String userEmail;
    private String loginPassword;
    private String userRole;

    public UserAccount(String firstName, String lastName, String userEmail, String loginPassword, String userRole) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userEmail = userEmail;
        this.loginPassword = loginPassword;
        this.userRole = userRole;
    }
}
