import PagePlaceholder from '../components/PagePlaceholder';

// FR-02: POST /api/v1/auth/login with { phone, password }
export default function LoginPage() {
  return (
    <PagePlaceholder title="تسجيل الدخول" story="US-02">
      <p>رقم الجوال وكلمة المرور. بعد الدخول: المريض إلى طلباتي، وموظف الاستقبال إلى لوحة الطلبات.</p>
    </PagePlaceholder>
  );
}
