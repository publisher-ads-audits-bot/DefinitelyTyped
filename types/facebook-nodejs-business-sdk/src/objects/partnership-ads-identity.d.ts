import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnershipAdsIdentity
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnershipAdsIdentity extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_saved: "is_saved";
        post_types: "post_types";
        secondary_identities: "secondary_identities";
    }>;
}
