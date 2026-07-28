const STORAGE_KEY = 'prelim_exam_results';

function getAllResults() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveResult(email, studentId, section, score, total, answers, questions) {
    const results = getAllResults();
    const existingIndex = results.findIndex(r => r.email === email);
    const record = {
        email,
        studentId,
        section,
        score,
        total,
        answers,
        questions,
        date: new Date().toISOString()
    };
    if (existingIndex !== -1) {
        results[existingIndex] = record;
    } else {
        results.push(record);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

function getStudentResult(email) {
    const results = getAllResults();
    return results.find(r => r.email === email) || null;
}

function getResultsBySection(section) {
    const results = getAllResults();
    return results.filter(r => r.section === section);
}

function getAllSections() {
    const results = getAllResults();
    return [...new Set(results.map(r => r.section))].sort();
}

function getStats() {
    const results = getAllResults();
    const total = results.length;
    const passed = results.filter(r => (r.score / r.total) >= 0.6).length;
    const failed = total - passed;
    const bySection = {};
    results.forEach(r => {
        if (!bySection[r.section]) bySection[r.section] = { total: 0, passed: 0 };
        bySection[r.section].total++;
        if ((r.score / r.total) >= 0.6) bySection[r.section].passed++;
    });
    return { total, passed, failed, passRate: total > 0 ? (passed / total * 100).toFixed(1) : 0, bySection };
}

function downloadResultsCSV() {
    const results = getAllResults();
    if (results.length === 0) {
        alert('No results to download.');
        return;
    }
    let csv = 'Email,Student ID,Section,Score,Total,Percentage,Date\n';
    results.forEach(r => {
        const pct = ((r.score / r.total) * 100).toFixed(1);
        csv += `${r.email},${r.studentId},${r.section},${r.score},${r.total},${pct}%,${r.date}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exam_results.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

window.getAllResults = getAllResults;
window.saveResult = saveResult;
window.getStudentResult = getStudentResult;
window.getResultsBySection = getResultsBySection;
window.getAllSections = getAllSections;
window.getStats = getStats;
window.downloadResultsCSV = downloadResultsCSV;
window.STORAGE_KEY = STORAGE_KEY;