export const initEuroMessageKt = ({
  appAlias,
  huaweiAppAlias,
  organizationId,
  siteId,
  datasource,
  channel,
  segmentUrl,
  realtimeUrl,
  targetUrl,
  actionUrl,
  geofenceUrl
}: {
  appAlias: string;
  huaweiAppAlias: string;
  organizationId: string;
  siteId: string;
  datasource: string;
  channel: string;
  segmentUrl: string;
  realtimeUrl: string;
  targetUrl: string;
  actionUrl: string;
  geofenceUrl: string;
}): string => `
private fun initEuroMessage() {
    val appAlias = "${appAlias}"
    val huaweiAppAlias = "${huaweiAppAlias}"
    val organizationId = "${organizationId}"
    val siteId = "${siteId}"
    val datasource = "${datasource}"
    val channel = "${channel}"
    val segmentUrl = "${segmentUrl}"
    val realtimeUrl = "${realtimeUrl}"
    val targetUrl = "${targetUrl}"
    val actionUrl = "${actionUrl}"
    val geofenceUrl = "${geofenceUrl}"

    Visilabs.CreateAPI(
      organizationId,
      siteId,
      segmentUrl,
      datasource,
      realtimeUrl,
      channel,
      this,
      targetUrl,
      actionUrl,
      30000,
      geofenceUrl,
      true,
      "reactnative"
    )

    val euroMobileManager = EuroMobileManager.init(appAlias, huaweiAppAlias, this)

    // optional
    euroMobileManager.setPushIntent("com.pushsdk.MainActivity", this)
//    euroMobileManager.setNotificationTransparentSmallIcon(R.drawable.ic_launcher, this)
//    euroMobileManager.setNotificationTransparentSmallIconDarkMode(R.drawable.ic_launcher, this)
    euroMobileManager.useNotificationLargeIcon(true)
//    euroMobileManager.setNotificationLargeIcon(R.drawable.ic_launcher, this)
//    euroMobileManager.setNotificationLargeIconDarkMode(R.drawable.ic_launcher, this)
    euroMobileManager.setNotificationColor("#d1dbbd")
    euroMobileManager.setChannelName("Channel", this)
//    euroMobileManager.setNotificationPriority(RDNotificationPriority.NORMAL, this) // Set to HIGH for push notifications to appear as temporary banners
}
  `;

export const initEuroMessageJava = ({
  appAlias,
  huaweiAppAlias,
  organizationId,
  siteId,
  datasource,
  channel,
  segmentUrl,
  realtimeUrl,
  targetUrl,
  actionUrl,
  geofenceUrl
}: {
  appAlias: string;
  huaweiAppAlias: string;
  organizationId: string;
  siteId: string;
  datasource: string;
  channel: string;
  segmentUrl: string;
  realtimeUrl: string;
  targetUrl: string;
  actionUrl: string;
  geofenceUrl: string;
}): string => ` 
private void initEuroMessage() {
    String appAlias = "${appAlias}";
    String huaweiAppAlias = "${huaweiAppAlias}";
    String organizationId = "${organizationId}";
    String siteId = "${siteId}";
    String datasource = "${datasource}";
    String channel = "${channel}";
    String segmentUrl = "${segmentUrl}";
    String realtimeUrl = "${realtimeUrl}";
    String targetUrl = "${targetUrl}";
    String actionUrl = "${actionUrl}";
    String geofenceUrl = "${geofenceUrl}";

    Visilabs.CreateAPI(organizationId, siteId, segmentUrl,
            datasource, realtimeUrl, channel, this, targetUrl, actionUrl, 30000, geofenceUrl, true, "reactnative");

    EuroMobileManager euroMobileManager = EuroMobileManager.init(appAlias, huaweiAppAlias, this);
    
    // optional
    euroMobileManager.setPushIntent("com.pushsdk.MainActivity", this);
    // euroMobileManager.setNotificationTransparentSmallIcon(R.drawable.ic_launcher, this);
    // euroMobileManager.setNotificationTransparentSmallIconDarkMode(R.drawable.ic_launcher, this);
    euroMobileManager.useNotificationLargeIcon(true);
    // euroMobileManager.setNotificationLargeIcon(R.drawable.ic_launcher, this);
    // euroMobileManager.setNotificationLargeIconDarkMode(R.drawable.ic_launcher, this);
    euroMobileManager.setNotificationColor("#d1dbbd");
    euroMobileManager.setChannelName("Channel", this);
    // euroMobileManager.setNotificationPriority(RDNotificationPriority.NORMAL, this); // Set to HIGH for push notifications to appear as temporary banners

}
  `;
