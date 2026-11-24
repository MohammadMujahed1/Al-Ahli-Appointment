import PagePlaceholder from '../../components/PagePlaceholder';

// FR-13, FR-14: GET/POST /api/v1/admin/clinics, PUT /api/v1/admin/clinics/:clinicId,
//               PATCH /api/v1/admin/clinics/:clinicId/status
export default function ManageClinicsPage() {
  return (
    <PagePlaceholder title="إدارة العيادات" story="US-13, US-14">
      <p>إضافة عيادة وتعديلها مع أيام وساعات العمل، وتفعيلها أو إيقافها.</p>
    </PagePlaceholder>
  );
}
