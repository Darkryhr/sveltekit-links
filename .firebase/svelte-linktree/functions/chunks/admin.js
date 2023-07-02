import pkg from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
const FB_PROJECT_ID = "svelte-linktree";
const FB_CLIENT_EMAIL = "firebase-adminsdk-ur16p@svelte-linktree.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDF7IBObVts4d0y\n/GL/t9hSW4dX14pUW25BMAHrEH8lDnTEbSJ2//oDSBWnctzKtcV83v0DQ2lUK9Bd\nZnZlnP+68E+MW51OoNBPc5rHYmg/IY5d6aPYgQhskcOWd6cnub3HxmK6aIvV0rfl\npSv1A8hPgu6iGMuCeEYQ/Hvc/L7iJ+mZkc/Yw4mdDCLusMfu52a+USzDAkCkK0Nn\nfVA4U4I8OwV+S84TPUnNd9wI7u9R+2oNENa3QC8LB+mqnyK2+4OGkqyTd8aBf5B8\nRstG5+fAWfoAFv9bwVqdhuy3Qhy4fDPsLEHkyL95qmMLnCpcCmwFYRVrTb9+s4jJ\n2hk8naP5AgMBAAECggEADOlAdh1DIrIEidAWAy7H1pja64YyI2OdfcohwzxIbFnq\nOxVlc1QqcoQFdEQVbBx5yAth1OXVB/pzCrdlj3uzi6B5MqOX+j+aUdHYQxvDx3kr\nE4GWFchWYi1gur7jxr8inAFwgk7R7xO3uawnLGy1PfPsGOM7hK96M/R3KLN3c5g1\nDqWN4+/La717Ca5JLC0GCiZWa/d3UTn6V5m2RuvQul3JegW6LhUwJAdd/ZO5388D\nfF9i3iRR9N1bWOOJFbQ4kda/IZ7dG7JTznwBXpECDGXV19E8GoxGL6SEY/ny2NOg\nt0YukcLH3BYam/UAj3VyJZEMng6gWa5WwJeSMPFWcwKBgQD7e2SgvlYU+u+htGPs\n0S3V68byMWMew10aMiRC4tS4S6uvVbh32wyyIXov3QFk8i3HCkZ1lIpiuq+PZ4ae\nN/1mVE1VOPIvA576cREg2piq8B03RiXc5ZvtLDXI5c84qaa2iuWcqZcDI9ZTUoMo\nPNj4USZqyIqwRqX3/6H41563AwKBgQDJeskKkQpIHq3ZO5QIbZqdTBNAY5R/GdLy\ngz1Lc8T4VhtRLgrbRpvnv9Iod6JSw0/PTKvJNOH21on7IwljqDje3fCcn6JrrOXB\ncEofrNkqdzOiZs2KTsMRxTALOj/puumjFzrHSWzH4+XDsNt/8YsyZLSxQZdFsSZ/\n+kEPzoYaUwKBgFLsSzAd0vC0FdQyUUjDaOPDDSTLWC3KqaZ7pi1P8miauw/jqiIL\nXtJV655gt5b7rFCXeMhIpKENgdo9fswpFitp3N4fGuyZuxBFvCojKngjGN8jCFUg\neRvpmgqWjI/YkRpcDn5sBVmJtaBf8tOPzNOEnrBTVDfv88Ykytns727VAoGBAJOI\nMnBnVmUK+fgo1TP6tg3aZ/ptMI6FZV8pVJfMdP33Z1dhZJe+M2lWn9f8CkOaOvWr\nydqyu4fY/v6DYFu2Eba4Q3kct30rBK5JwC1Dj122HXwc1QMiu1pmztBZ3fUTZgOD\nfgnxrRMNwPAzr/cW8vt6nIlzYwaoOm3Z3QxrCO17AoGATisNUfKIJ1xCv0cB3qE3\n0g9FXkaTh0dJAPB5PfBQoPM2bQprOlvdVdTyUbkIzXRDjUKvAChUF+7gfeQpmEaL\nVJCwkpqA0NRr3RQUhWfM4i4lR6okzkAQg9vrnofC3m3b/fLlDqJpI5wg1Sjp1itK\nblq1K1+aw6zhwhWt+eT14Nw=\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase admin error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
