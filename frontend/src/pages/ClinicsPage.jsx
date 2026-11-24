import PagePlaceholder from '../components/PagePlaceholder';

// FR-04, FR-05: GET /api/v1/clinics?search=&day=
export default function ClinicsPage() {
  return (
    <PagePlaceholder title="العيادات" story="US-04, US-05">
      <p>قائمة العيادات مع الموقع وأيام وساعات العمل، والبحث بالاسم والتصفية حسب اليوم.</p>
    </PagePlaceholder>
  );
}
