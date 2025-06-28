import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
  standalone: false,
})
export class ReportPage {
  searchText: string = '';

  reports = [
    {
      nopol: 'D 2345 PW',
      namaMobil: 'Mobil A',
      status: 'Selesai'
    },
    // Tambah data lainnya di sini
  ];

  filteredReports = [...this.reports];

  filterReports() {
    const search = this.searchText.toLowerCase();
    this.filteredReports = this.reports.filter(report =>
      report.nopol.toLowerCase().includes(search)
    );
  }
}
