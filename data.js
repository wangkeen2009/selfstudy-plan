const studyPlanData = {
    title: "COVID-19 冠狀病毒主蛋白酶的活性中心與抑制劑開發",
    startDate: "2025/9/1",
    endDate: "2026/1/15",
    reason: `
        全球性的 COVID-19 大流行對人類健康和社會經濟造成了深遠影響。儘管疫苗已廣泛應用，但針對病毒本身的特效藥物開發仍然至關重要，特別是對於無法接種疫苗或疫苗效果不佳的群體。冠狀病毒主蛋白酶 (Main Protease, Mpro 或 3CLpro) 是病毒複製過程中的關鍵酶，其功能對於病毒生命週期不可或缺，且在人體內缺乏同源物，使其成為理想的抗病毒藥物靶點。\n\n        作為一名有志於醫學領域的高中生，我對傳染病學和藥物開發充滿興趣。選擇此主題，旨在深入了解 COVID-19 病毒的作用機制，探索現代藥物設計的基本原理與前沿技術。透過研究 Mpro 的活性中心結構及其與抑制劑的相互作用，我希望能初步掌握生物分子結構與功能關係的核心概念，並了解從基礎研究到藥物開發的轉化過程。這不僅能滿足我的求知慾，更能為未來進入醫學或相關生物科技領域奠定紮實的基礎知識和研究視野。
    `,
    goals: [
        "深入理解 COVID-19 病毒的生物學特性及其主蛋白酶 (Mpro) 在病毒複製中的關鍵作用。",
        "學習蛋白質結構的基礎知識，特別是 Mpro 的三維結構及其活性中心的特點。",
        "探索藥物抑制劑的設計原理，了解不同類型抑制劑（如共價抑制劑、非共價抑制劑）的作用機制。",
        "研究現有針對 Mpro 的抑制劑（如 Paxlovid 中的 Nirmatrelvir）的開發歷程與作用方式。",
        "初步接觸生物資訊學工具和資料庫（如 PDB），學習如何查找、分析和視覺化蛋白質結構。",
        "培養獨立查找、閱讀和分析科學文獻（主要是中文文獻）的能力。",
        "提升科學研究的規劃、執行與總結能力，完成一份結構完整的自主學習報告。"
    ],
    expectedOutcomes: [
        "掌握 COVID-19 病毒 Mpro 的基本知識，包括其結構、功能及作為藥物靶點的重要性。",
        "建立對蛋白質結構與功能關係的基本認識，能解釋 Mpro 活性中心的關鍵殘基及其作用。",
        "了解藥物抑制劑設計的基本策略，能區分不同抑制劑類型並闡述其作用原理。",
        "熟悉至少一種 Mpro 抑制劑的開發故事和作用機制。",
        "能夠使用 PDB 等資料庫檢索和初步分析 Mpro 的結構資訊。",
        "提升資訊素養和學術閱讀能力，能從科學文獻中提取關鍵資訊。",
        "完成一份高品質的自主學習計畫成果報告，展現學習過程與成果。",
        "增強對生物醫學研究的興趣，為未來大學學習和職業發展奠定基礎。"
    ],
    monthlyGoals: [
        // --- 月份 1: 2025/09 --- (4 週)
        {
            id: "month1",
            month: "第一個月 (2025/09)",
            title: "基礎知識建立與文獻入門",
            description: "本月重點在於建立對 COVID-19 病毒、蛋白質結構和藥物開發的基本認識，並開始熟悉相關科學文獻的查找與閱讀。",
            weeklyGoals: [
                {
                    id: "m1w1",
                    title: "第一週 (09/01-09/07): 病毒學與 Mpro 基礎",
                    startDate: "09/01",
                    endDate: "09/07",
                    dailyTasks: [
                        { date: "09/01 (一)", tasks: [{ id: "m1w1d1t1", content: "查找並閱讀關於冠狀病毒（特別是 SARS-CoV-2）的基本介紹資料（來源：教科書、科普文章、WHO 網站）。" }] },
                        { date: "09/02 (二)", tasks: [{ id: "m1w1d2t1", content: "學習病毒的生命週期，了解病毒如何複製。" }] },
                        { date: "09/03 (三)", tasks: [{ id: "m1w1d3t1", content: "初步了解什麼是酶？什麼是蛋白酶？查找 Mpro 在 SARS-CoV-2 複製中的具體作用。" }] },
                        { date: "09/04 (四)", tasks: [{ id: "m1w1d4t1", content: "觀看 Mpro 結構與功能的入門影片（YouTube 或其他教育平台）。" }] },
                        { date: "09/05 (五)", tasks: [{ id: "m1w1d5t1", content: "整理本週學習筆記，記錄關鍵概念（病毒結構、複製、Mpro 功能）。" }] },
                        { date: "09/06 (六)", tasks: [{ id: "m1w1d6t1", content: "複習本週內容，嘗試用自己的話解釋 Mpro 的重要性。" }] },
                        { date: "09/07 (日)", tasks: [{ id: "m1w1d7t1", content: "規劃下週學習重點。" }] }
                    ]
                },
                {
                    id: "m1w2",
                    title: "第二週 (09/08-09/14): 蛋白質結構入門",
                    startDate: "09/08",
                    endDate: "09/14",
                    dailyTasks: [
                        { date: "09/08 (一)", tasks: [{ id: "m1w2d1t1", content: "學習胺基酸的基本結構和分類。" }] },
                        { date: "09/09 (二)", tasks: [{ id: "m1w2d2t1", content: "了解蛋白質的一級、二級、三級和四級結構概念。" }] },
                        { date: "09/10 (三)", tasks: [{ id: "m1w2d3t1", content: "學習常見的蛋白質二級結構（α-螺旋、β-摺疊）。" }] },
                        { date: "09/11 (四)", tasks: [{ id: "m1w2d4t1", content: "觀看蛋白質摺疊與結構形成的教學影片。" }] },
                        { date: "09/12 (五)", tasks: [{ id: "m1w2d5t1", content: "查找 Mpro 的基本結構特徵（例如：它屬於哪類蛋白酶？）。" }] },
                        { date: "09/13 (六)", tasks: [{ id: "m1w2d6t1", content: "整理本週學習筆記，繪製蛋白質不同級別結構的示意圖。" }] },
                        { date: "09/14 (日)", tasks: [{ id: "m1w2d7t1", content: "複習本週內容，準備下週學習 PDB 資料庫。" }] }
                    ]
                },
                {
                    id: "m1w3",
                    title: "第三週 (09/15-09/21): PDB 資料庫與 Mpro 結構初探",
                    startDate: "09/15",
                    endDate: "09/21",
                    dailyTasks: [
                        { date: "09/15 (一)", tasks: [{ id: "m1w3d1t1", content: "訪問 PDB (Protein Data Bank) 網站，了解其功能和用途。" }] },
                        { date: "09/16 (二)", tasks: [{ id: "m1w3d2t1", content: "學習如何在 PDB 中搜索特定的蛋白質（例如 SARS-CoV-2 Mpro）。" }] },
                        { date: "09/17 (三)", tasks: [{ id: "m1w3d3t1", content: "嘗試下載一個 Mpro 的 PDB 檔案（例如 6LU7 或 7K3T）。" }] },
                        { date: "09/18 (四)", tasks: [{ id: "m1w3d4t1", content: "學習使用 PDB 網站提供的 3D 視覺化工具（如 Mol*）觀察 Mpro 的整體結構。" }] },
                        { date: "09/19 (五)", tasks: [{ id: "m1w3d5t1", content: "找出 Mpro 的活性中心大致位置，觀察其形狀。" }] },
                        { date: "09/20 (六)", tasks: [{ id: "m1w3d6t1", content: "整理本週學習筆記，記錄 PDB 使用方法和 Mpro 結構觀察心得。" }] },
                        { date: "09/21 (日)", tasks: [{ id: "m1w3d7t1", content: "複習本週內容，準備下週學習藥物抑制劑基礎。" }] }
                    ]
                },
                {
                    id: "m1w4",
                    title: "第四週 (09/22-09/28): 藥物抑制劑基礎與文獻查找",
                    startDate: "09/22",
                    endDate: "09/28",
                    dailyTasks: [
                        { date: "09/22 (一)", tasks: [{ id: "m1w4d1t1", content: "學習藥物靶點的概念，為何 Mpro 是好的靶點？" }] },
                        { date: "09/23 (二)", tasks: [{ id: "m1w4d2t1", content: "了解酶抑制劑的基本概念和分類（可逆 vs. 不可逆，競爭性 vs. 非競爭性等）。" }] },
                        { date: "09/24 (三)", tasks: [{ id: "m1w4d3t1", content: "初步了解藥物開發的基本流程（從靶點發現到臨床試驗）。" }] },
                        { date: "09/25 (四)", tasks: [{ id: "m1w4d4t1", content: "學習如何使用學術搜索引擎（如 Google Scholar, PubMed）查找相關文獻。" }] },
                        { date: "09/26 (五)", tasks: [{ id: "m1w4d5t1", content: "嘗試搜索關於「COVID-19 Mpro 抑制劑」的中文綜述性文獻。" }] },
                        { date: "09/27 (六)", tasks: [{ id: "m1w4d6t1", content: "整理本週學習筆記，記錄抑制劑類型和文獻搜索技巧。" }] },
                        { date: "09/28 (日)", tasks: [{ id: "m1w4d7t1", content: "完成第一個月學習總結與反思。" }] }
                    ]
                }
            ]
        },
        // --- 月份 2: 2025/10 --- (4 週)
        {
            id: "month2",
            month: "第二個月 (2025/10)",
            title: "Mpro 活性中心深入研究",
            description: "本月專注於深入理解 Mpro 活性中心的結構細節、關鍵胺基酸殘基及其催化機制，並學習如何分析抑制劑與活性中心的相互作用。",
            weeklyGoals: [
                {
                    id: "m2w1",
                    title: "第一週 (09/29-10/05): Mpro 活性位點結構",
                    startDate: "09/29",
                    endDate: "10/05",
                    dailyTasks: [
                        { date: "09/29 (一)", tasks: [{ id: "m2w1d1t1", content: "閱讀一篇關於 Mpro 結構與功能的中文綜述文獻。" }] },
                        { date: "09/30 (二)", tasks: [{ id: "m2w1d2t1", content: "使用 PDB 視覺化工具，仔細觀察 Mpro 活性位點的口袋結構。" }] },
                        { date: "10/01 (三)", tasks: [{ id: "m2w1d3t1", content: "找出構成 Mpro 活性位點的關鍵胺基酸殘基（如催化二聯體 His41 和 Cys145）。" }] },
                        { date: "10/02 (四)", tasks: [{ id: "m2w1d4t1", content: "學習這些關鍵殘基在催化反應中的作用。" }] },
                        { date: "10/03 (五)", tasks: [{ id: "m2w1d5t1", content: "了解底物結合口袋（S1, S2 等）的概念及其特異性。" }] },
                        { date: "10/04 (六)", tasks: [{ id: "m2w1d6t1", content: "整理本週學習筆記，繪製 Mpro 活性位點示意圖並標註關鍵殘基。" }] },
                        { date: "10/05 (日)", tasks: [{ id: "m2w1d7t1", content: "複習本週內容，準備下週學習催化機制。" }] }
                    ]
                },
                {
                    id: "m2w2",
                    title: "第二週 (10/06-10/12): Mpro 催化機制",
                    startDate: "10/06",
                    endDate: "10/12",
                    dailyTasks: [
                        { date: "10/06 (一)", tasks: [{ id: "m2w2d1t1", content: "查找資料，了解半胱氨酸蛋白酶（Cysteine Protease）的一般催化機制。" }] },
                        { date: "10/07 (二)", tasks: [{ id: "m2w2d2t1", content: "學習 Mpro 特定的催化步驟，理解 His41 和 Cys145 如何協同作用。" }] },
                        { date: "10/08 (三)", tasks: [{ id: "m2w2d3t1", content: "觀看 Mpro 催化機制的動畫或模擬影片。" }] },
                        { date: "10/09 (四)", tasks: [{ id: "m2w2d4t1", content: "理解 Mpro 作為二聚體對其活性的影響。" }] },
                        { date: "10/10 (五)", tasks: [{ id: "m2w2d5t1", content: "閱讀文獻，了解 Mpro 底物識別的特異性。" }] },
                        { date: "10/11 (六)", tasks: [{ id: "m2w2d6t1", content: "整理本週學習筆記，繪製 Mpro 催化循環的流程圖。" }] },
                        { date: "10/12 (日)", tasks: [{ id: "m2w2d7t1", content: "複習本週內容，準備下週學習抑制劑與活性位點的相互作用。" }] }
                    ]
                },
                {
                    id: "m2w3",
                    title: "第三週 (10/13-10/19): 抑制劑與活性位點的相互作用 (1)",
                    startDate: "10/13",
                    endDate: "10/19",
                    dailyTasks: [
                        { date: "10/13 (一)", tasks: [{ id: "m2w3d1t1", content: "選擇一個已知的 Mpro 抑制劑（例如 Nirmatrelvir 的前體 PF-00835231）。" }] },
                        { date: "10/14 (二)", tasks: [{ id: "m2w3d2t1", content: "在 PDB 中查找該抑制劑與 Mpro 結合的複合物結構（例如 7K3T）。" }] },
                        { date: "10/15 (三)", tasks: [{ id: "m2w3d3t1", content: "使用視覺化工具觀察抑制劑如何嵌入活性位點口袋。" }] },
                        { date: "10/16 (四)", tasks: [{ id: "m2w3d4t1", content: "找出抑制劑與活性位點關鍵殘基之間形成的相互作用（如氫鍵、疏水作用）。" }] },
                        { date: "10/17 (五)", tasks: [{ id: "m2w3d5t1", content: "學習共價抑制劑的作用機制，了解 Nirmatrelvir 如何與 Cys145 形成共價鍵。" }] },
                        { date: "10/18 (六)", tasks: [{ id: "m2w3d6t1", content: "整理本週學習筆記，記錄抑制劑與 Mpro 的相互作用模式。" }] },
                        { date: "10/19 (日)", tasks: [{ id: "m2w3d7t1", content: "複習本週內容，準備下週分析更多抑制劑。" }] }
                    ]
                },
                {
                    id: "m2w4",
                    title: "第四週 (10/20-10/26): 抑制劑與活性位點的相互作用 (2)",
                    startDate: "10/20",
                    endDate: "10/26",
                    dailyTasks: [
                        { date: "10/20 (一)", tasks: [{ id: "m2w4d1t1", content: "選擇另一個不同類型的 Mpro 抑制劑（例如非共價抑制劑）。" }] },
                        { date: "10/21 (二)", tasks: [{ id: "m2w4d2t1", content: "在 PDB 中查找其與 Mpro 的複合物結構。" }] },
                        { date: "10/22 (三)", tasks: [{ id: "m2w4d3t1", content: "比較共價與非共價抑制劑在結合模式上的異同。" }] },
                        { date: "10/23 (四)", tasks: [{ id: "m2w4d4t1", content: "閱讀文獻，了解不同抑制劑的親和力 (Affinity) 和效力 (Potency) 差異。" }] },
                        { date: "10/24 (五)", tasks: [{ id: "m2w4d5t1", content: "思考抑制劑的哪些化學基團對結合起關鍵作用。" }] },
                        { date: "10/25 (六)", tasks: [{ id: "m2w4d6t1", content: "整理本週學習筆記，比較不同抑制劑的作用特點。" }] },
                        { date: "10/26 (日)", tasks: [{ id: "m2w4d7t1", content: "完成第二個月學習總結與反思。" }] }
                    ]
                }
            ]
        },
        // --- 月份 3: 2025/11 --- (4 週)
        {
            id: "month3",
            month: "第三個月 (2025/11)",
            title: "抑制劑開發策略與案例研究",
            description: "本月將學習藥物設計的基本策略，特別是針對 Mpro 的抑制劑開發方法，並深入研究 Paxlovid 等代表性藥物的開發歷程。",
            weeklyGoals: [
                {
                    id: "m3w1",
                    title: "第一週 (10/27-11/02): 藥物設計基本策略",
                    startDate: "10/27",
                    endDate: "11/02",
                    dailyTasks: [
                        { date: "10/27 (一)", tasks: [{ id: "m3w1d1t1", content: "了解基於結構的藥物設計 (SBDD) 的概念。" }] },
                        { date: "10/28 (二)", tasks: [{ id: "m3w1d2t1", content: "學習藥物篩選的基本方法（高通量篩選 HTS）。" }] },
                        { date: "10/29 (三)", tasks: [{ id: "m3w1d3t1", content: "了解先導化合物 (Lead Compound) 的發現與優化過程。" }] },
                        { date: "10/30 (四)", tasks: [{ id: "m3w1d4t1", content: "學習計算機輔助藥物設計 (CADD) 的基本概念。" }] },
                        { date: "10/31 (五)", tasks: [{ id: "m3w1d5t1", content: "閱讀關於藥物設計策略的科普文章或綜述。" }] },
                        { date: "11/01 (六)", tasks: [{ id: "m3w1d6t1", content: "整理本週學習筆記，總結不同的藥物設計方法。" }] },
                        { date: "11/02 (日)", tasks: [{ id: "m3w1d7t1", content: "複習本週內容，準備下週研究 Mpro 抑制劑開發策略。" }] }
                    ]
                },
                {
                    id: "m3w2",
                    title: "第二週 (11/03-11/09): Mpro 抑制劑開發策略",
                    startDate: "11/03",
                    endDate: "11/09",
                    dailyTasks: [
                        { date: "11/03 (一)", tasks: [{ id: "m3w2d1t1", content: "閱讀文獻，了解針對 Mpro 的藥物篩選策略（例如：虛擬篩選、片段篩選）。" }] },
                        { date: "11/04 (二)", tasks: [{ id: "m3w2d2t1", content: "研究如何利用 Mpro 的活性位點結構設計抑制劑。" }] },
                        { date: "11/05 (三)", tasks: [{ id: "m3w2d3t1", content: "了解肽模擬物 (Peptidomimetics) 在 Mpro 抑制劑設計中的應用。" }] },
                        { date: "11/06 (四)", tasks: [{ id: "m3w2d4t1", content: "探討共價抑制劑設計的挑戰與優勢。" }] },
                        { date: "11/07 (五)", tasks: [{ id: "m3w2d5t1", content: "查找是否有利用 AI 技術進行 Mpro 抑制劑設計的研究。" }] },
                        { date: "11/08 (六)", tasks: [{ id: "m3w2d6t1", content: "整理本週學習筆記，歸納 Mpro 抑制劑的設計思路。" }] },
                        { date: "11/09 (日)", tasks: [{ id: "m3w2d7t1", content: "複習本週內容，準備下週 Paxlovid 案例研究。" }] }
                    ]
                },
                {
                    id: "m3w3",
                    title: "第三週 (11/10-11/16): Paxlovid (Nirmatrelvir) 案例研究 (1)",
                    startDate: "11/10",
                    endDate: "11/16",
                    dailyTasks: [
                        { date: "11/10 (一)", tasks: [{ id: "m3w3d1t1", content: "查找 Paxlovid 的基本資訊（開發公司、批准時間、適應症）。" }] },
                        { date: "11/11 (二)", tasks: [{ id: "m3w3d2t1", content: "了解 Paxlovid 的兩種成分：Nirmatrelvir 和 Ritonavir 的作用。" }] },
                        { date: "11/12 (三)", tasks: [{ id: "m3w3d3t1", content: "閱讀關於 Nirmatrelvir 開發歷程的報導或文獻。" }] },
                        { date: "11/13 (四)", tasks: [{ id: "m3w3d4t1", content: "研究 Nirmatrelvir 是如何從早期先導化合物優化而來的。" }] },
                        { date: "11/14 (五)", tasks: [{ id: "m3w3d5t1", content: "分析 Nirmatrelvir 的化學結構，找出其關鍵藥效基團。" }] },
                        { date: "11/15 (六)", tasks: [{ id: "m3w3d6t1", content: "整理本週學習筆記，記錄 Paxlovid 的開發背景和 Nirmatrelvir 的結構特點。" }] },
                        { date: "11/16 (日)", tasks: [{ id: "m3w3d7t1", content: "複習本週內容，準備下週深入分析其作用機制。" }] }
                    ]
                },
                {
                    id: "m3w4",
                    title: "第四週 (11/17-11/23): Paxlovid (Nirmatrelvir) 案例研究 (2)",
                    startDate: "11/17",
                    endDate: "11/23",
                    dailyTasks: [
                        { date: "11/17 (一)", tasks: [{ id: "m3w4d1t1", content: "再次使用 PDB 視覺化工具觀察 Nirmatrelvir 與 Mpro 的結合細節。" }] },
                        { date: "11/18 (二)", tasks: [{ id: "m3w4d2t1", content: "詳細分析 Nirmatrelvir 與活性位點殘基的相互作用網絡。" }] },
                        { date: "11/19 (三)", tasks: [{ id: "m3w4d3t1", content: "理解 Ritonavir 在 Paxlovid 中的作用（藥代動力學增強劑）。" }] },
                        { date: "11/20 (四)", tasks: [{ id: "m3w4d4t1", content: "查找 Paxlovid 的臨床試驗數據，了解其有效性和安全性。" }] },
                        { date: "11/21 (五)", tasks: [{ id: "m3w4d5t1", content: "探討 Paxlovid 可能存在的局限性或耐藥性問題。" }] },
                        { date: "11/22 (六)", tasks: [{ id: "m3w4d6t1", content: "整理本週學習筆記，總結 Paxlovid 的作用機制和臨床應用。" }] },
                        { date: "11/23 (日)", tasks: [{ id: "m3w4d7t1", content: "完成第三個月學習總結與反思。" }] }
                    ]
                }
            ]
        },
        // --- 月份 4: 2025/12 --- (4 週)
        {
            id: "month4",
            month: "第四個月 (2025/12)",
            title: "其他抑制劑與前沿進展",
            description: "本月將拓寬視野，了解除 Paxlovid 外的其他 Mpro 抑制劑，關注抑制劑開發領域的最新研究進展和未來方向。",
            weeklyGoals: [
                {
                    id: "m4w1",
                    title: "第一週 (11/24-11/30): 其他代表性 Mpro 抑制劑",
                    startDate: "11/24",
                    endDate: "11/30",
                    dailyTasks: [
                        { date: "11/24 (一)", tasks: [{ id: "m4w1d1t1", content: "查找並了解日本鹽野義開發的 Ensitrelvir (Xocova)。" }] },
                        { date: "11/25 (二)", tasks: [{ id: "m4w1d2t1", content: "研究 Ensitrelvir 的作用機制，比較其與 Nirmatrelvir 的異同。" }] },
                        { date: "11/26 (三)", tasks: [{ id: "m4w1d3t1", content: "查找中國開發的 Mpro 抑制劑，例如先聲藥業的 SIM0417 (先諾欣)。" }] },
                        { date: "11/27 (四)", tasks: [{ id: "m4w1d4t1", content: "了解 SIM0417 的結構特點和作用機制。" }] },
                        { date: "11/28 (五)", tasks: [{ id: "m4w1d5t1", content: "比較不同 Mpro 抑制劑的優缺點。" }] },
                        { date: "11/29 (六)", tasks: [{ id: "m4w1d6t1", content: "整理本週學習筆記，記錄不同 Mpro 抑制劑的資訊。" }] },
                        { date: "11/30 (日)", tasks: [{ id: "m4w1d7t1", content: "複習本週內容，準備下週了解耐藥性問題。" }] }
                    ]
                },
                {
                    id: "m4w2",
                    title: "第二週 (12/01-12/07): Mpro 抑制劑的耐藥性問題",
                    startDate: "12/01",
                    endDate: "12/07",
                    dailyTasks: [
                        { date: "12/01 (一)", tasks: [{ id: "m4w2d1t1", content: "學習抗病毒藥物耐藥性產生的一般機制。" }] },
                        { date: "12/02 (二)", tasks: [{ id: "m4w2d2t1", content: "查找關於 SARS-CoV-2 Mpro 可能出現耐藥性突變的研究。" }] },
                        { date: "12/03 (三)", tasks: [{ id: "m4w2d3t1", content: "分析這些突變可能如何影響抑制劑的結合。" }] },
                        { date: "12/04 (四)", tasks: [{ id: "m4w2d4t1", content: "探討應對 Mpro 抑制劑耐藥性的策略（如聯合用藥）。" }] },
                        { date: "12/05 (五)", tasks: [{ id: "m4w2d5t1", content: "閱讀關於 Mpro 耐藥性監測的文獻。" }] },
                        { date: "12/06 (六)", tasks: [{ id: "m4w2d6t1", content: "整理本週學習筆記，總結 Mpro 耐藥性的機制與應對。" }] },
                        { date: "12/07 (日)", tasks: [{ id: "m4w2d7t1", content: "複習本週內容，準備下週探索新抑制劑類型。" }] }
                    ]
                },
                {
                    id: "m4w3",
                    title: "第三週 (12/08-12/14): 新型 Mpro 抑制劑與前沿技術",
                    startDate: "12/08",
                    endDate: "12/14",
                    dailyTasks: [
                        { date: "12/08 (一)", tasks: [{ id: "m4w3d1t1", content: "查找是否有非活性位點抑制劑 (Allosteric Inhibitors) 的研究。" }] },
                        { date: "12/09 (二)", tasks: [{ id: "m4w3d2t1", content: "了解 PROTAC 等蛋白質降解技術在抗病毒藥物開發中的潛力。" }] },
                        { date: "12/10 (三)", tasks: [{ id: "m4w3d3t1", content: "關注利用 AI 和機器學習發現新型 Mpro 抑制劑的研究進展。" }] },
                        { date: "12/11 (四)", tasks: [{ id: "m4w3d4t1", content: "探討廣譜冠狀病毒抑制劑的開發策略。" }] },
                        { date: "12/12 (五)", tasks: [{ id: "m4w3d5t1", content: "閱讀一篇關於 Mpro 抑制劑開發未來方向的展望性文章。" }] },
                        { date: "12/13 (六)", tasks: [{ id: "m4w3d6t1", content: "整理本週學習筆記，記錄 Mpro 抑制劑開發的前沿方向。" }] },
                        { date: "12/14 (日)", tasks: [{ id: "m4w3d7t1", content: "複習本週內容，準備下週開始整理報告。" }] }
                    ]
                },
                {
                    id: "m4w4",
                    title: "第四週 (12/15-12/21): 學習總結與報告初稿",
                    startDate: "12/15",
                    endDate: "12/21",
                    dailyTasks: [
                        { date: "12/15 (一)", tasks: [{ id: "m4w4d1t1", content: "回顧前四個月的學習筆記和資料。" }] },
                        { date: "12/16 (二)", tasks: [{ id: "m4w4d2t1", content: "規劃自主學習報告的整體結構（引言、背景、方法、結果討論、結論、參考文獻）。" }] },
                        { date: "12/17 (三)", tasks: [{ id: "m4w4d3t1", content: "開始撰寫報告的引言和背景部分。" }] },
                        { date: "12/18 (四)", tasks: [{ id: "m4w4d4t1", content: "整理關於 Mpro 結構與功能的內容，撰寫相關章節。" }] },
                        { date: "12/19 (五)", tasks: [{ id: "m4w4d5t1", content: "整理關於抑制劑設計與案例分析的內容，撰寫相關章節。" }] },
                        { date: "12/20 (六)", tasks: [{ id: "m4w4d6t1", content: "初步整理參考文獻列表。" }] },
                        { date: "12/21 (日)", tasks: [{ id: "m4w4d7t1", content: "完成第四個月學習總結與反思，評估報告初稿進度。" }] }
                    ]
                }
            ]
        },
        // --- 月份 5: 2026/01 --- (2.5 週)
        {
            id: "month5",
            month: "第五個月 (2025/12/22 - 2026/01/15)",
            title: "報告撰寫、完善與最終總結",
            description: "本階段專注於完成自主學習報告的撰寫、修改和潤色，並進行最終的學習成果總結與反思。",
            weeklyGoals: [
                {
                    id: "m5w1",
                    title: "第一週 (12/22-12/28): 報告主體完成與圖表製作",
                    startDate: "12/22",
                    endDate: "12/28",
                    dailyTasks: [
                        { date: "12/22 (一)", tasks: [{ id: "m5w1d1t1", content: "繼續撰寫報告的討論和結論部分。" }] },
                        { date: "12/23 (二)", tasks: [{ id: "m5w1d2t1", content: "根據報告內容，構思並製作必要的圖表（如 Mpro 結構示意圖、抑制劑結合模式圖）。" }] },
                        { date: "12/24 (三)", tasks: [{ id: "m5w1d3t1", content: "學習如何規範地引用參考文獻。" }] },
                        { date: "12/25 (四)", tasks: [{ id: "m5w1d4t1", content: "完成參考文獻列表的格式化。" }] },
                        { date: "12/26 (五)", tasks: [{ id: "m5w1d5t1", content: "通讀報告初稿，檢查內容的連貫性和邏輯性。" }] },
                        { date: "12/27 (六)", tasks: [{ id: "m5w1d6t1", content: "修改報告初稿中的明顯錯誤和疏漏。" }] },
                        { date: "12/28 (日)", tasks: [{ id: "m5w1d7t1", content: "評估報告完成度，規劃下階段修改重點。" }] }
                    ]
                },
                {
                    id: "m5w2",
                    title: "第二週 (12/29-01/04): 報告修改與潤色",
                    startDate: "12/29",
                    endDate: "01/04",
                    dailyTasks: [
                        { date: "12/29 (一)", tasks: [{ id: "m5w2d1t1", content: "仔細校對報告全文的文字表達和語法錯誤。" }] },
                        { date: "12/30 (二)", tasks: [{ id: "m5w2d2t1", content: "檢查圖表是否清晰、準確，圖例是否完整。" }] },
                        { date: "12/31 (三)", tasks: [{ id: "m5w2d3t1", content: "調整報告排版，使其美觀易讀。" }] },
                        { date: "01/01 (四)", tasks: [{ id: "m5w2d4t1", content: "（元旦）休息或根據需要進行修改。" }] },
                        { date: "01/02 (五)", tasks: [{ id: "m5w2d5t1", content: "請同學或老師（如果可能）閱讀報告並提供反饋意見。" }] },
                        { date: "01/03 (六)", tasks: [{ id: "m5w2d6t1", content: "根據反饋意見，進一步修改和完善報告。" }] },
                        { date: "01/04 (日)", tasks: [{ id: "m5w2d7t1", content: "完成報告的最終版本。" }] }
                    ]
                },
                {
                    id: "m5w3",
                    title: "第三週 (01/05-01/15): 最終總結與反思",
                    startDate: "01/05",
                    endDate: "01/15",
                    dailyTasks: [
                        { date: "01/05 (一)", tasks: [{ id: "m5w3d1t1", content: "回顧整個自主學習過程，整理心得體會。" }] },
                        { date: "01/06 (二)", tasks: [{ id: "m5w3d2t1", content: "撰寫學習過程中的挑戰與收穫。" }] },
                        { date: "01/07 (三)", tasks: [{ id: "m5w3d3t1", content: "完成 1500 字的「自主學習計畫完成後心得與反思」初稿。" }] },
                        { date: "01/08 (四)", tasks: [{ id: "m5w3d4t1", content: "修改和潤色心得反思。" }] },
                        { date: "01/09 (五)", tasks: [{ id: "m5w3d5t1", content: "整理所有學習成果文件（報告、筆記、反思）。" }] },
                        { date: "01/10 (六)", tasks: [{ id: "m5w3d6t1", content: "檢查交互式網頁的最終狀態，確保所有進度已記錄。" }] },
                        { date: "01/11 (日)", tasks: [{ id: "m5w3d7t1", content: "備份最終的進度資料（匯出 JSON）。" }] },
                        { date: "01/12 (一)", tasks: [{ id: "m5w3d8t1", content: "準備提交自主學習計畫成果。" }] },
                        { date: "01/13 (二)", tasks: [{ id: "m5w3d9t1", content: "最後檢查所有文件和網頁連結。" }] },
                        { date: "01/14 (三)", tasks: [{ id: "m5w3d10t1", content: "預留時間處理可能出現的意外情況。" }] },
                        { date: "01/15 (四)", tasks: [{ id: "m5w3d11t1", content: "完成所有自主學習任務！提交成果。" }] }
                    ]
                }
            ]
        }
    ],
    reflection: `
## 學習旅程的回顧與省思

歷時四個半月的「COVID-19 冠狀病毒主蛋白酶的活性中心與抑制劑開發」自主學習計畫終於畫上了句點。回首這段旅程，充滿了挑戰，也滿載著收穫。從最初對病毒學和藥物設計的懵懂，到如今能夠初步闡述 Mpro 的結構、功能以及抑制劑的作用機制，我深切感受到了知識探索的魅力與科學研究的嚴謹。

### 知識體系的建立與深化

計畫初期，我投入大量時間學習病毒學、生物化學和分子生物學的基礎知識。從冠狀病毒的基本結構、複製週期，到蛋白質的各級結構、酶的催化原理，這些看似零散的知識點，在圍繞 Mpro 這一核心靶點的學習過程中逐漸串聯起來。我學會了使用 PDB 資料庫查找和視覺化蛋白質結構，親眼觀察到 Mpro 活性位點的精巧構造，特別是 His41 和 Cys145 組成的催化二聯體，以及底物結合口袋的特異性。理解 Mpro 作為半胱氨酸蛋白酶的催化機制，讓我對酶的工作原理有了更直觀的認識。這不僅僅是知識的記憶，更是對生命分子運作邏輯的理解。

### 跨學科思維的初步培養

藥物抑制劑的開發是一個典型的跨學科領域。在研究 Mpro 抑制劑的過程中，我接觸到了藥物化學、計算生物學和臨床醫學等多方面的知識。學習基於結構的藥物設計 (SBDD)、高通量篩選 (HTS) 等策略，讓我了解到現代藥物研發的複雜流程。深入研究 Paxlovid (Nirmatrelvir) 的案例，從其先導化合物的優化，到與 Mpro 的相互作用機制，再到 Ritonavir 的藥代動力學輔助作用，讓我體會到一個成功藥物的誕生需要基礎研究、化學合成、生物測試和臨床驗證等多環節的緊密協作。比較不同抑制劑（如 Ensitrelvir、SIM0417）的異同，以及探討耐藥性問題，更讓我認識到藥物開發的持續挑戰性。

### 研究能力的提升與挑戰

本次自主學習計畫極大地鍛煉了我的資訊檢索、文獻閱讀和分析能力。從最初面對浩如煙海的學術文獻感到無從下手，到逐漸學會利用關鍵詞、篩選條件在 Google Scholar 和 PubMed 中精準查找，並能從中文綜述和研究論文中提取關鍵資訊，這是一個顯著的進步。嘗試理解 PDB 數據、分析抑制劑與靶點的相互作用模式，雖然充滿挑戰，但也極大地激發了我的學習興趣。撰寫最終的學習報告，則是對整個學習過程的系統梳理和總結，迫使我將所學知識進行結構化、邏輯化的表達。時間管理和學習進度的把控也是一大挑戰，尤其是在課業壓力下，如何平衡好自主學習的時間，需要不斷調整和優化。

### 未來的展望

這次自主學習經歷不僅讓我對 COVID-19 和藥物開發有了更深入的了解，更重要的是點燃了我對生物醫學研究的熱情。Mpro 活性中心與抑制劑的精妙互動，讓我驚嘆於生命分子的智慧，也讓我看到了科學家們為應對全球健康危機所付出的巨大努力。雖然目前所學尚淺，但我對未來進入大學醫學或相關領域的學習充滿了期待。我希望能繼續深入探索生命的奧秘，未來或許也能為新藥的研發貢獻自己的一份力量。這次計畫培養的獨立思考、解決問題和持續學習的能力，將是我未來學術道路上寶貴的財富。
    `,
    references: [
        { id: "ref1", title: "世界衛生組織：COVID-19 專題", type: "website", authors: "WHO", source: "WHO Official Website", year: "2024", url: "https://www.who.int/zh/health-topics/coronavirus" },
        { id: "ref2", title: "SARS-CoV-2 Mpro (PDB ID: 6LU7)", type: "database", authors: "Jin, Z., Du, X., Xu, Y. et al.", source: "Protein Data Bank (PDB)", year: "2020", url: "https://www.rcsb.org/structure/6LU7" },
        { id: "ref3", title: "SARS-CoV-2 Mpro complex with Nirmatrelvir precursor (PDB ID: 7K3T)", type: "database", authors: "Hoffman, R.L. et al.", source: "Protein Data Bank (PDB)", year: "2021", url: "https://www.rcsb.org/structure/7K3T" },
        { id: "ref4", title: "COVID-19 治療藥物與疫苗開發進展", type: "review", authors: "張文宏 等", source: "中華傳染病雜誌 (假設)", year: "2023", url: "#" }, // 替換為真實可下載連結
        { id: "ref5", title: "冠狀病毒主蛋白酶結構、功能及抑制劑研究進展", type: "review", authors: "王曉東, 李明 (假設)", source: "藥學學報 (假設)", year: "2022", url: "http://pps.cpu.edu.cn/cn/article/pdf/preview/10.20053/j.issn1001-5094.2024.09.002.pdf" }, // 示例連結
        { id: "ref6", title: "Paxlovid 的作用機制與臨床應用", type: "review", authors: "劉強 (假設)", source: "中國新藥雜誌 (假設)", year: "2023", url: "#" }, // 替換為真實可下載連結
        { id: "ref7", title: "蛋白質結構與功能入門", type: "video", authors: "Khan Academy (或其他平台)", source: "YouTube/Bilibili", year: "N/A", url: "https://www.youtube.com/results?search_query=%E8%9B%8B%E7%99%BD%E8%B3%AA%E7%B5%90%E6%A7%8B%E5%85%A5%E9%96%80" },
        { id: "ref8", title: "如何使用 PDB 資料庫", type: "video", authors: "RCSB PDB", source: "YouTube", year: "N/A", url: "https://www.youtube.com/user/rcsbpdb" },
        { id: "ref9", title: "酶抑制劑類型詳解", type: "video", authors: "某生物化學教學頻道", source: "YouTube/Bilibili", year: "N/A", url: "https://www.youtube.com/results?search_query=%E9%85%B6%E6%8A%91%E5%88%B6%E5%8A%91%E9%A1%9E%E5%9E%8B" },
        { id: "ref10", title: "基於結構的藥物設計介紹", type: "video", authors: "藥物設計教學頻道", source: "YouTube/Bilibili", year: "N/A", url: "https://www.youtube.com/results?search_query=%E5%9F%BA%E6%96%BC%E7%B5%90%E6%A7%8B%E7%9A%84%E8%97%A5%E7%89%A9%E8%A8%AD%E8%A8%88" },
        { id: "ref11", title: "COVID-19 藥物開發：主蛋白酶抑制劑", type: "article", authors: "科技部科普平台 (假設)", source: "科普中國/科學人", year: "2022", url: "#" }, // 替換為真實連結
        { id: "ref12", title: "認識 Paxlovid：一款抗擊新冠的口服藥", type: "article", authors: "健康報/丁香醫生 (假設)", source: "健康科普平台", year: "2023", url: "#" }, // 替換為真實連結
        { id: "ref13", title: "世界衛生組織 COVID-19 治療指南 (中文)", type: "guideline", authors: "WHO", source: "WHO Official Website", year: "2023", url: "https://iris.who.int/bitstream/handle/10665/362843/WHO-2019-nCoV-therapeutics-2022.5-chi.pdf" }, // 示例連結
        { id: "ref14", title: "SARS-CoV-2 Mpro 抑制劑的耐藥性突變研究", type: "research", authors: "某研究團隊", source: "bioRxiv/medRxiv (預印本)", year: "2023", url: "#" }, // 替換為真實連結
        { id: "ref15", title: "生物資訊學基礎與 PDB 應用", type: "course", authors: "Coursera/edX/學堂在線", source: "線上課程平台", year: "N/A", url: "#" } // 替換為真實課程連結
    ]
};
