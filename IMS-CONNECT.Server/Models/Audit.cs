using System;

namespace IMSConnect.Models
{
    public class Audit
    {
        public int Id { get; set; }
        public string Action { get; set; }
        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }
        public string Details { get; set; }
    }
}

