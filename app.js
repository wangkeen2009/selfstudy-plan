// 當文檔加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化應用
    initApp();
    
    // 設置標籤頁切換
    setupTabs();
    
    // 設置資料匯出/匯入功能
    setupDataControls();
    
    // 設置通知關閉按鈕
    document.getElementById('close-notification').addEventListener('click', function() {
        document.getElementById('notification').classList.add('hidden');
    });
    
    // 更新最後更新時間
    document.getElementById('last-updated').textContent = new Date().toLocaleDateString('zh-TW');
});

// 初始化應用
function initApp() {
    // 載入研究原因與目標
    loadResearchReasonAndGoals();
    
    // 載入預期收穫
    loadExpectedOutcomes();
    
    // 載入月份標籤
    loadMonthTabs();
    
    // 載入週目標表格
    loadWeeklyGoalsTable();
    
    // 載入心得反思
    loadReflection();
    
    // 載入參考資料
    loadReferences();
    
    // 嘗試從本地儲存載入進度資料
    loadProgressData();
}

// 載入研究原因與目標
function loadResearchReasonAndGoals() {
    // 載入研究原因
    document.getElementById('research-reason').innerHTML = studyPlanData.reason.split('\n').map(p => `<p>${p.trim()}</p>`).join('');
    
    // 載入研究目標
    const goalsList = document.getElementById('research-goals');
    studyPlanData.goals.forEach(goal => {
        const li = document.createElement('li');
        li.textContent = goal;
        goalsList.appendChild(li);
    });
}

// 載入預期收穫
function loadExpectedOutcomes() {
    const outcomesList = document.getElementById('expected-outcomes');
    studyPlanData.expectedOutcomes.forEach(outcome => {
        const li = document.createElement('li');
        li.textContent = outcome;
        outcomesList.appendChild(li);
    });
}

// 載入月份標籤
function loadMonthTabs() {
    const monthTabsList = document.getElementById('month-tabs-list');
    
    // 清空現有內容
    monthTabsList.innerHTML = '';
    
    // 為每個月份創建標籤
    studyPlanData.monthlyGoals.forEach((month, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = month.month;
        button.dataset.monthId = month.id;
        button.classList.toggle('active', index === 0); // 第一個月份默認激活
        
        button.addEventListener('click', function() {
            // 移除所有標籤的激活狀態
            document.querySelectorAll('#month-tabs-list button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 激活當前標籤
            this.classList.add('active');
            
            // 顯示對應月份的內容
            showMonthContent(month.id);
        });
        
        li.appendChild(button);
        monthTabsList.appendChild(li);
    });
    
    // 默認顯示第一個月份的內容
    if (studyPlanData.monthlyGoals.length > 0) {
        showMonthContent(studyPlanData.monthlyGoals[0].id);
    }
}

// 顯示指定月份的內容
function showMonthContent(monthId) {
    const monthContent = document.getElementById('month-content');
    
    // 清空現有內容
    monthContent.innerHTML = '';
    
    // 查找對應月份的數據
    const monthData = studyPlanData.monthlyGoals.find(month => month.id === monthId);
    
    if (!monthData) return;
    
    // 創建月份標題和描述
    const monthHeader = document.createElement('div');
    monthHeader.className = 'card';
    monthHeader.innerHTML = `
        <h3>${monthData.title}</h3>
        <div class="card-content">
            <p>${monthData.description}</p>
        </div>
    `;
    monthContent.appendChild(monthHeader);
    
    // 創建週目標折疊面板
    monthData.weeklyGoals.forEach(week => {
        const weekAccordion = document.createElement('div');
        weekAccordion.className = 'accordion';
        weekAccordion.dataset.weekId = week.id;
        
        const weekHeader = document.createElement('div');
        weekHeader.className = 'accordion-header';
        weekHeader.innerHTML = `
            <span>${week.title}</span>
            <i class="fas fa-chevron-down accordion-icon"></i>
        `;
        
        const weekContent = document.createElement('div');
        weekContent.className = 'accordion-content';
        
        // 為每天創建任務列表
        week.dailyTasks.forEach(day => {
            const dayTasks = document.createElement('div');
            dayTasks.className = 'day-tasks';
            
            const dayDate = document.createElement('div');
            dayDate.className = 'day-date';
            dayDate.textContent = day.date;
            dayTasks.appendChild(dayDate);
            
            // 為每個任務創建項目
            day.tasks.forEach(task => {
                // 創建唯一的任務ID
                const taskUniqueId = `${monthId}-${week.id}-${day.date}-${task.id}`;
                
                // 創建任務項目
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.dataset.taskId = taskUniqueId;
                
                // 設置任務內容
                const taskContent = document.createElement('div');
                taskContent.className = 'task-content';
                taskContent.textContent = task.content;
                taskItem.appendChild(taskContent);
                
                // 創建任務控制區域
                const taskControls = document.createElement('div');
                taskControls.className = 'task-controls';
                
                // 創建進度選擇器
                const progressContainer = document.createElement('div');
                progressContainer.className = 'task-progress-container';
                progressContainer.innerHTML = `
                    <label>進度:</label>
                    <select class="task-progress">
                        <option value="not_started">未開始</option>
                        <option value="in_progress">實施中</option>
                        <option value="completed">已完成</option>
                    </select>
                `;
                taskControls.appendChild(progressContainer);
                
                // 創建反思輸入區域
                const reflectionContainer = document.createElement('div');
                reflectionContainer.className = 'task-reflection-container';
                reflectionContainer.innerHTML = `
                    <label>反思 (20字以內):</label>
                    <textarea class="task-reflection" maxlength="20" placeholder="輸入您的反思..."></textarea>
                    <button class="save-reflection btn btn-small">儲存</button>
                `;
                taskControls.appendChild(reflectionContainer);
                
                taskItem.appendChild(taskControls);
                dayTasks.appendChild(taskItem);
                
                // 設置進度選擇器事件
                const progressSelect = taskItem.querySelector('.task-progress');
                progressSelect.addEventListener('change', function() {
                    saveTaskProgress(taskUniqueId, this.value);
                });
                
                // 設置反思輸入框事件
                const reflectionTextarea = taskItem.querySelector('.task-reflection');
                reflectionTextarea.addEventListener('input', function() {
                    // 限制字數為20
                    if (this.value.length > 20) {
                        this.value = this.value.substring(0, 20);
                    }
                });
                
                // 設置儲存反思按鈕事件
                const saveReflectionBtn = taskItem.querySelector('.save-reflection');
                saveReflectionBtn.addEventListener('click', function() {
                    const reflection = reflectionTextarea.value.trim();
                    saveTaskReflection(taskUniqueId, reflection);
                    
                    // 顯示儲存成功通知
                    showNotification('反思已成功儲存！');
                });
                
                // 從本地儲存載入任務進度和反思
                const progressData = getTaskProgressData(taskUniqueId);
                if (progressData) {
                    progressSelect.value = progressData.progress || 'not_started';
                    reflectionTextarea.value = progressData.reflection || '';
                }
            });
            
            weekContent.appendChild(dayTasks);
        });
        
        weekAccordion.appendChild(weekHeader);
        weekAccordion.appendChild(weekContent);
        monthContent.appendChild(weekAccordion);
        
        // 設置折疊面板點擊事件
        weekHeader.addEventListener('click', function() {
            weekAccordion.classList.toggle('active');
            
            // 切換圖標
            const icon = this.querySelector('.accordion-icon');
            if (weekAccordion.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
}

// 載入週目標表格
function loadWeeklyGoalsTable() {
    const tableBody = document.querySelector('#weekly-goals-table tbody');
    
    // 清空現有內容
    tableBody.innerHTML = '';
    
    // 為每個月份創建表格行
    studyPlanData.monthlyGoals.forEach((month, monthIndex) => {
        // 為每個週目標創建表格行
        month.weeklyGoals.forEach((week, weekIndex) => {
            const row = document.createElement('tr');
            
            // 階段（只在每個月份的第一個週顯示）
            const phaseCell = document.createElement('td');
            if (weekIndex === 0) {
                phaseCell.textContent = month.month;
                phaseCell.rowSpan = month.weeklyGoals.length;
                row.appendChild(phaseCell);
            }
            
            // 週次
            const weekCell = document.createElement('td');
            weekCell.textContent = week.title.split(':')[0];
            
            // 週目標
            const goalCell = document.createElement('td');
            goalCell.textContent = week.title.split(':')[1] ? week.title.split(':')[1].trim() : '';
            
            // 每日任務內容
            const tasksCell = document.createElement('td');
            const tasksList = document.createElement('ul');
            
            week.dailyTasks.forEach(day => {
                day.tasks.forEach(task => {
                    const taskItem = document.createElement('li');
                    taskItem.innerHTML = `<strong>${day.date}:</strong> ${task.content}`;
                    tasksList.appendChild(taskItem);
                });
            });
            
            tasksCell.appendChild(tasksList);
            
            // 將單元格添加到行
            row.appendChild(weekCell);
            row.appendChild(goalCell);
            row.appendChild(tasksCell);
            
            // 將行添加到表格
            tableBody.appendChild(row);
        });
    });
}

// 載入心得反思
function loadReflection() {
    const reflectionContent = document.getElementById('reflection-content');
    
    // 將反思文本分段顯示
    const paragraphs = studyPlanData.reflection.split('\n').filter(p => p.trim() !== '');
    
    let html = '';
    paragraphs.forEach(p => {
        if (p.startsWith('## ')) {
            // 二級標題
            html += `<h2>${p.substring(3).trim()}</h2>`;
        } else if (p.startsWith('### ')) {
            // 三級標題
            html += `<h3>${p.substring(4).trim()}</h3>`;
        } else {
            // 普通段落
            html += `<p>${p.trim()}</p>`;
        }
    });
    
    reflectionContent.innerHTML = html;
}

// 載入參考資料
function loadReferences() {
    const referencesList = document.getElementById('references-list');
    
    // 清空現有內容
    referencesList.innerHTML = '';
    
    // 為每個參考資料創建卡片
    studyPlanData.references.forEach(ref => {
        const refItem = document.createElement('div');
        refItem.className = 'reference-item';
        
        // 根據參考資料類型設置圖標
        let typeIcon = '';
        switch (ref.type) {
            case 'review':
            case 'article':
            case 'research':
                typeIcon = 'fa-file-alt';
                break;
            case 'video':
                typeIcon = 'fa-video';
                break;
            case 'website':
                typeIcon = 'fa-globe';
                break;
            case 'database':
                typeIcon = 'fa-database';
                break;
            case 'guideline':
                typeIcon = 'fa-book';
                break;
            case 'course':
                typeIcon = 'fa-graduation-cap';
                break;
            default:
                typeIcon = 'fa-file';
        }
        
        refItem.innerHTML = `
            <div class="reference-title">${ref.title}</div>
            <div class="reference-authors">${ref.authors} (${ref.year})</div>
            <div class="reference-source">${ref.source}</div>
            <a href="${ref.url}" target="_blank" class="reference-link">
                <i class="fas ${typeIcon}"></i> 查看資源
            </a>
        `;
        
        referencesList.appendChild(refItem);
    });
}

// 設置標籤頁切換
function setupTabs() {
    const tabLinks = document.querySelectorAll('.tabs a');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有標籤的激活狀態
            tabLinks.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // 隱藏所有內容
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // 激活當前標籤
            this.classList.add('active');
            
            // 顯示對應內容
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// 設置資料匯出/匯入功能
function setupDataControls() {
    // 匯出資料
    document.getElementById('export-data').addEventListener('click', function() {
        exportProgressData();
    });
    
    // 匯入資料
    document.getElementById('import-data').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            importProgressData(file);
        }
    });
}

// 儲存任務進度
function saveTaskProgress(taskId, progress) {
    let progressData = JSON.parse(localStorage.getItem('taskProgressData')) || {};
    
    if (!progressData[taskId]) {
        progressData[taskId] = {};
    }
    
    progressData[taskId].progress = progress;
    
    localStorage.setItem('taskProgressData', JSON.stringify(progressData));
    
    // 顯示儲存成功通知
    showNotification('進度已成功儲存！');
}

// 儲存任務反思
function saveTaskReflection(taskId, reflection) {
    let progressData = JSON.parse(localStorage.getItem('taskProgressData')) || {};
    
    if (!progressData[taskId]) {
        progressData[taskId] = {};
    }
    
    progressData[taskId].reflection = reflection;
    
    localStorage.setItem('taskProgressData', JSON.stringify(progressData));
}

// 獲取任務進度資料
function getTaskProgressData(taskId) {
    const progressData = JSON.parse(localStorage.getItem('taskProgressData')) || {};
    return progressData[taskId];
}

// 載入進度資料
function loadProgressData() {
    const progressData = JSON.parse(localStorage.getItem('taskProgressData')) || {};
    
    // 遍歷所有任務項目，設置進度和反思
    document.querySelectorAll('.task-item').forEach(taskItem => {
        const taskId = taskItem.dataset.taskId;
        const taskData = progressData[taskId];
        
        if (taskData) {
            // 設置進度
            if (taskData.progress) {
                taskItem.querySelector('.task-progress').value = taskData.progress;
            }
            
            // 設置反思
            if (taskData.reflection) {
                taskItem.querySelector('.task-reflection').value = taskData.reflection;
            }
        }
    });
}

// 匯出進度資料
function exportProgressData() {
    const progressData = JSON.parse(localStorage.getItem('taskProgressData')) || {};
    
    // 創建下載連結
    const dataStr = JSON.stringify(progressData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `covid-study-plan-progress-${new Date().toISOString().slice(0, 10)}.json`;
    
    // 觸發下載
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // 顯示匯出成功通知
    showNotification('進度資料已成功匯出！');
}

// 匯入進度資料
function importProgressData(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const progressData = JSON.parse(e.target.result);
            
            // 儲存到本地儲存
            localStorage.setItem('taskProgressData', JSON.stringify(progressData));
            
            // 重新載入進度資料
            loadProgressData();
            
            // 顯示匯入成功通知
            showNotification('進度資料已成功匯入！');
        } catch (error) {
            // 顯示錯誤通知
            showNotification('匯入失敗：無效的資料格式', true);
            console.error('Import error:', error);
        }
    };
    
    reader.readAsText(file);
}

// 顯示通知
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    
    notification.classList.remove('hidden', 'error');
    if (isError) {
        notification.classList.add('error');
    }
    
    notificationMessage.textContent = message;
    
    // 5秒後自動隱藏
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 5000);
}
