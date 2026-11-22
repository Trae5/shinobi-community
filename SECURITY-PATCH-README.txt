SHINOBI COMMUNITY HUB SECURITY PATCH

Changes made:
- Prevents members from granting themselves moderator status.
- Prevents members from changing moderation sanctions (mutedUntil, warnings).
- Restricts post updates so authors cannot change moderation fields (status, devReply, hidden, pinned).
- Restricts comments to owner/mod moderation or author likes-only updates.
- Requires bug, feature, discussion, comment, chat, and activity creation to use the authenticated UID as author.
- Allows notification creation for other users (needed for the hub's existing notification feature), while constraining fields and size.
- Limits notifications to recipient reads, read-state updates, and recipient deletes.
- Restricts announcement and moderation management to moderators.


IMPORTANT DEPLOYMENT NOTE:
The included hub/firestore.rules is a community-collections rules patch, NOT a complete replacement
for the live Firestore rules. Merge these matches/helpers into the existing master rules file
and preserve the existing game rules (including saves/{uid}, config/{uid}, and other game paths).
Review and deploy using Firebase Console Rules after testing in the Firestore Rules emulator.
The live Firebase rules were not deployed by this patch.


Testing status:
- Source inspection and lightweight structural sanity checks only.
- Firebase CLI / Firestore Rules Emulator was not available in this environment, so emulator tests
  and live deployment were not performed.
