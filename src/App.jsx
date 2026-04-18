import { useState } from "react";

const summaryCards = [
  { label: "今日の一手", value: "3つ", note: "小さく刻めば進む" },
  { label: "応募候補", value: "5社", note: "医療AIを中心に観測" },
  { label: "優先ルート", value: "2本", note: "医療AI / 運用改善" },
];

const todayTasks = [
  "doda / Green / Wantedly を15分だけ見る",
  "応募候補を3件メモする",
  "職務経歴書の医療AI版を1段だけ直す",
];

const axes = [
  "働き続けること",
  "医療 × AI に近づくこと",
  "年収300万円前後でも生活成立",
  "いきなり逃げる転職やなく、景色を見る転職活動にする",
];

const routes = [
  {
    title: "医療AI / ヘルステック",
    text: "医療現場の理解を武器に、AI導入や運用の橋渡しを狙う本命ルート。",
  },
  {
    title: "品質管理・運用改善",
    text: "今の強みをそのまま転用しやすい。地味やけど通しやすい現実路線。",
  },
  {
    title: "将来的に障害者支援",
    text: "今すぐ全部背負わんでええ。医療AIの次に見に行く選択肢として温存。",
  },
];

const initialCompanies = [
  {
    name: "Splink",
    url: "https://herp.careers/v1/splinkinc",
    note: "医療AIの本命候補。現場理解を実装側へつなぐ視点で観測。",
  },
  {
    name: "気になる会社A",
    url: "https://example.com",
    note: "あとで本物の求人リンクに差し替える枠。",
  },
  {
    name: "気になる会社B",
    url: "https://example.com",
    note: "ヘルステック / 品質 / 運用改善の監視用。",
  },
];

const strengths = [
  "検査・品質・教育・請求まで横断で回してきた",
  "複雑な業務を整理して、事故らせず流れを作れる",
  "現場の泥くささと、改善の現実ラインの両方がわかる",
];

const interviewPoints = [
  "辞めたいからではなく、新しい環境で通用するか試したい",
  "医療現場の理解を、AIや業務改善の実装側で活かしたい",
  "現場理解と運用力の両方で貢献できる",
];

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: "32px 20px 48px",
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic", sans-serif',
    color: "#111827",
  },
  container: {
    maxWidth: "1080px",
    margin: "0 auto",
  },
  hero: {
    background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
    color: "#ffffff",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 20px 40px rgba(17, 24, 39, 0.18)",
    marginBottom: "24px",
  },
  heroKicker: {
    margin: 0,
    fontSize: "13px",
    letterSpacing: "0.08em",
    opacity: 0.8,
  },
  heroTitle: {
    margin: "10px 0 12px",
    fontSize: "clamp(28px, 4vw, 42px)",
    lineHeight: 1.15,
  },
  heroText: {
    margin: 0,
    maxWidth: "720px",
    fontSize: "16px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  },
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  },
  summaryCard: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
  },
  label: {
    margin: 0,
    color: "#6b7280",
    fontSize: "14px",
  },
  value: {
    margin: "8px 0 6px",
    fontSize: "28px",
    fontWeight: 700,
  },
  note: {
    margin: 0,
    color: "#4b5563",
    fontSize: "14px",
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  section: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
  },
  sectionWide: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
    gridColumn: "1 / -1",
  },
  heading: {
    marginTop: 0,
    marginBottom: "16px",
    fontSize: "22px",
  },
  list: {
    margin: 0,
    paddingLeft: "20px",
    lineHeight: 1.9,
  },
  routeList: {
    display: "grid",
    gap: "14px",
  },
  routeCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "16px",
  },
  routeTitle: {
    margin: "0 0 8px",
    fontSize: "17px",
    fontWeight: 700,
  },
  routeText: {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.7,
  },
  companyList: {
    display: "grid",
    gap: "14px",
  },
  companyCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "16px",
    background: "#ffffff",
  },
  companyHeader: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "8px",
  },
  companyName: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 700,
  },
  companyLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: "999px",
    background: "#111827",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
  companyNote: {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.7,
  },
  companySectionGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
    gap: "20px",
  },
  companyForm: {
    display: "grid",
    gap: "12px",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "12px 14px",
    fontSize: "14px",
    color: "#111827",
    background: "#ffffff",
  },
  textarea: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "12px 14px",
    fontSize: "14px",
    color: "#111827",
    background: "#ffffff",
    minHeight: "110px",
    resize: "vertical",
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic", sans-serif',
  },
  addButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "none",
    background: "#111827",
    color: "#ffffff",
    fontWeight: 700,
    cursor: "pointer",
  },
  helperText: {
    margin: 0,
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: 1.7,
  },
  quote: {
    margin: 0,
    padding: "16px 18px",
    borderLeft: "4px solid #111827",
    background: "#f9fafb",
    borderRadius: "12px",
    lineHeight: 1.9,
    color: "#1f2937",
  },
  footer: {
    marginTop: "24px",
    color: "#6b7280",
    fontSize: "14px",
    textAlign: "center",
  },
};

export default function App() {
  const [companies, setCompanies] = useState(initialCompanies);
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [companyNote, setCompanyNote] = useState("");

  const handleAddCompany = (event) => {
    event.preventDefault();

    if (!companyName.trim() || !companyUrl.trim()) {
      return;
    }

    setCompanies((prev) => [
      {
        name: companyName.trim(),
        url: companyUrl.trim(),
        note: companyNote.trim() || "気になった理由をあとで追記する枠。",
      },
      ...prev,
    ]);

    setCompanyName("");
    setCompanyUrl("");
    setCompanyNote("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.hero}>
          <p style={styles.heroKicker}>CHARLIE JOB SUPPORT</p>
          <h1 style={styles.heroTitle}>チャーリーの転職活動ダッシュボード</h1>
          <p style={styles.heroText}>
            ここが転職活動の基地や。求人を見る、考えを整理する、次の一手を決める。でかい不安は分解したらだいたい雑魚やな、を画面にした版や。
          </p>
        </header>

        <section style={styles.summaryGrid}>
          {summaryCards.map((card) => (
            <div key={card.label} style={styles.summaryCard}>
              <p style={styles.label}>{card.label}</p>
              <p style={styles.value}>{card.value}</p>
              <p style={styles.note}>{card.note}</p>
            </div>
          ))}
        </section>

        <main style={styles.mainGrid}>
          <section style={styles.section}>
            <h2 style={styles.heading}>今日の一手</h2>
            <ul style={styles.list}>
              {todayTasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>転職の軸</h2>
            <ul style={styles.list}>
              {axes.map((axis) => (
                <li key={axis}>{axis}</li>
              ))}
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>強み</h2>
            <ul style={styles.list}>
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>面接で言うこと</h2>
            <ul style={styles.list}>
              {interviewPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section style={styles.sectionWide}>
            <h2 style={styles.heading}>候補ルート</h2>
            <div style={styles.routeList}>
              {routes.map((route) => (
                <article key={route.title} style={styles.routeCard}>
                  <h3 style={styles.routeTitle}>{route.title}</h3>
                  <p style={styles.routeText}>{route.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section style={styles.sectionWide}>
            <h2 style={styles.heading}>気になる会社リンク集</h2>
            <div style={styles.companySectionGrid}>
              <div style={styles.companyList}>
                {companies.map((company) => (
                  <article key={`${company.name}-${company.url}`} style={styles.companyCard}>
                    <div style={styles.companyHeader}>
                      <h3 style={styles.companyName}>{company.name}</h3>
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.companyLink}
                      >
                        リンクを開く
                      </a>
                    </div>
                    <p style={styles.companyNote}>{company.note}</p>
                  </article>
                ))}
              </div>

              <div style={styles.section}>
                <h3 style={styles.routeTitle}>会社を追加する</h3>
                <p style={styles.helperText}>
                  気になった瞬間に会社名、求人リンク、ひとことメモを入れるだけや。あとで差し替えもできる前提で、まず置くのが勝ちやな。
                </p>
                <form onSubmit={handleAddCompany} style={styles.companyForm}>
                  <input
                    type="text"
                    placeholder="会社名"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                    style={styles.input}
                  />
                  <input
                    type="url"
                    placeholder="https://求人リンク"
                    value={companyUrl}
                    onChange={(event) => setCompanyUrl(event.target.value)}
                    style={styles.input}
                  />
                  <textarea
                    placeholder="なんで気になったかメモ"
                    value={companyNote}
                    onChange={(event) => setCompanyNote(event.target.value)}
                    style={styles.textarea}
                  />
                  <button type="submit" style={styles.addButton}>
                    会社を追加
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section style={styles.sectionWide}>
            <h2 style={styles.heading}>転職理由の芯</h2>
            <p style={styles.quote}>
              現職では、検査・品質・教育・請求まで幅広く担当し、現場を安定して回す役割を担ってきました。今後はその現場理解を活かしながら、AIや業務改善がどう実装されるかを、より近い立場で見てみたいと考えています。辞めたいから動くのではなく、次の景色を見に行くための転職活動です。
            </p>
          </section>
        </main>

        <p style={styles.footer}>Charlie Job Support / first dashboard prototype</p>
      </div>
    </div>
  );
}
