NALIYAPARA PRIVATE NOTIFICATION ADMIN

આ પેકેજ માત્ર Notification Admin Panel માટે છે.
Main website FreeHosting પર જ રહેશે.

GitHub Pages:
1. એક private GitHub repository બનાવો.
2. આ folderની index.html અને logo.png upload કરો.
3. Settings > Pages > Deploy from branch પસંદ કરો.
4. GitHub Pages HTTPS URL આપશે.

Supabase backend:
- Project: naliyapara-family
- Edge Function: admin-notifications
- Edge Function: send-fcm-notification
- Table: notification_schedules
- Table: notification_devices
- Table: notification_logs

Admin login માટે તમારા Supabase Auth email/passwordનો ઉપયોગ થશે.

મહત્વનું:
- GitHub URL secret નથી; login security ફરજિયાત છે.
- Firebase service-account JSON browser/GitHubમાં ક્યારેય upload ન કરશો.
- Android appએ all_users FCM topic subscribe કરવો અને notification_devicesમાં device register/heartbeat કરવો પડશે, જેથી Active Users count સાચો આવે.
- Daily schedule execution માટે Supabase scheduler/cron દ્વારા run-scheduled-notifications function invoke કરવો જરૂરી છે.
