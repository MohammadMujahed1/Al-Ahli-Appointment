import PagePlaceholder from '../components/PagePlaceholder';

// FR-01: POST /api/v1/auth/register
export default function RegisterPage() {
  return (
    <PagePlaceholder title="إنشاء حساب مريض" story="US-01">
      <p>الاسم الكامل، رقم الجوال (05XXXXXXXX)، تاريخ الميلاد، البريد الإلكتروني (اختياري)، وكلمة المرور.</p>
    </PagePlaceholder>
  );
}
